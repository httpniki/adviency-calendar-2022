import { useState } from 'react'
import type { Gift } from '~/types/gifts'
import defaultImage from 'public/default-image.webp';
import GiftPrice from './gift/GiftPrice';
import GiftPreviewModal from './GiftPreviewModal';

interface Props {
   gift: Gift
   opts?: {
      recipient?: boolean
      priceType?: 'total' | 'unit'
   }
}

interface GiftPreviewState {
   gift: Gift | null
   render: Boolean
}

export default function Gift({ gift, opts }: Props) {
   const [giftPreview, setGiftPreview] = useState<GiftPreviewState>({ render: false, gift: null })
   const { recipient = true, priceType = 'unit' } = opts ?? {}

   return (
      <>
         <li 
            className='flex h-12 w-full cursor-pointer items-center justify-between gap-5 hover:opacity-80'
            onClick={() => setGiftPreview({ gift, render: true })}
         >
            <div className='flex gap-3'>
               <figure className='flex h-12 w-12 items-center justify-center'>
                  <img 
                     src={gift.image} 
                     alt={gift.name}
                     onError={(event) => (event.target as HTMLImageElement).src = defaultImage}
                  />
               </figure>

               <div className={`flex flex-col ${!recipient ? 'justify-center' : ''}`}>
                  <div className='flex items-center gap-1'>
                     <p className='font-semibold'>{gift.name}</p>
                     <p>({gift.quantity})</p>
                  </div>

                  {(recipient) 
                     ? <p className="text-sm text-gray-700">{gift.recipient}</p> 
                     : null
                  } 
               </div>
            </div>

            <GiftPrice 
               price={gift.price} 
               quantity={gift.quantity}
               priceType={priceType}
            />
         </li>   

         {(giftPreview.render) &&
            <GiftPreviewModal 
               gift={giftPreview.gift!}
               closeModal={() => setGiftPreview({ gift: null, render: false })}
            />
         }
      </>
   )
}  
