import { useEffect, useState } from 'react';
import useGiftPreview from '~/hooks/useGiftPreview';
import useGifts from '~/hooks/useGifts';
import type { Gift } from '~/types/gifts';
import convertToDecimalNumber from '~/utils/convertToDecimalNumber';
import getTotalPrice from '~/utils/getTotalPrice';
import setDefaultImage from '~/utils/setDefaultImage';

import AppModal from '../AppModal';
import Button from '../Button';
import ConfirmationPrompt from '../ConfirmationPrompt';

interface GiftPreviewModalProps {
   gift: Gift 
   closeModal: () => void
}

export default function GiftPreviewModal({ gift, closeModal }: GiftPreviewModalProps) {
   const { onDeleteGift, finalPrice, renderConfirmationPrompt } = useGiftPreview({ gift, closeModal })

   return (
      <AppModal 
         className='w-96'
         closeModal={closeModal}
      >
         <picture className='flex min-h-[250px] items-center'>
            <img 
               onError={setDefaultImage}
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

         <Button onClick={renderConfirmationPrompt.fn}>
            Borrar Regalo
         </Button>
         
         {(renderConfirmationPrompt.state) 
            ? <ConfirmationPrompt 
               onClick={onDeleteGift} 
               closeModal={renderConfirmationPrompt.fn}
            >
               ¿Estás seguro de eliminar el regalo?
            </ConfirmationPrompt>
            : null
         }
      </AppModal>
   )
}
