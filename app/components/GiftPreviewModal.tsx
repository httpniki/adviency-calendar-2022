import useGiftPreview from '~/hooks/useGiftPreview';
import type { Gift } from '~/types/gifts';
import defaultImage from 'public/default-image.webp';

import AppModal from './ui/AppModal';
import Button from './ui/Button';
import ConfirmationPrompt from './ui/ConfirmationPrompt';

interface Props {
   gift: Gift 
   closeModal: () => void
}

export default function GiftPreviewModal({ gift, closeModal }: Props) {
   const { finalPrice, deleteGift, renderConfirmationPopup, setRenderConfirmationPopup } = useGiftPreview({ gift, closeModal })

   return (
      <AppModal 
         className='w-96'
         closeModal={closeModal}
      >
         <picture className='flex min-h-[250px] items-center'>
            <img 
               onError={(event) => (event.target as HTMLImageElement).src = defaultImage}
               src={gift.image} 
               alt={gift.name}
            />
         </picture>

         <div className='flex w-full flex-col gap-2 rounded-t-[inherit] bg-white py-[10px]'>
            <div className='flex h-max justify-between'>
               <p className='font-bold'>{gift.name}</p>
               <p>${gift.price.toLocaleString()}</p>
            </div>

            <div className='flex justify-between'>
               <p>
                  {gift.recipient}
               </p>
               
               {(gift.quantity > 1) &&
                  <div className='flex gap-1'>
                     <p>x{gift.quantity}</p> 
                     <p>${finalPrice}</p>
                  </div>
               }
            </div>
         </div>

         <Button onClick={() => setRenderConfirmationPopup(true)}>
            Borrar Regalo
         </Button>
         
         {(renderConfirmationPopup) && 
            <ConfirmationPrompt 
               onClick={deleteGift} 
               closeModal={() => setRenderConfirmationPopup(false)}
               message="¿Estás seguro de eliminar el regalo?"
            />
         }
      </AppModal>
   )
}
