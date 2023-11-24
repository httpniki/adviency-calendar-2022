import { useState } from 'react'
import type { Gift } from '~/types/gifts'
import GiftPreviewModal from '../gift-preview/GiftPreviewModal'
import GiftImage from './GiftImage'
import GiftPrice from './GiftPrice'

interface GiftProps {
   gift: Gift
   opts?: {
      recipient?: boolean
      priceType?: 'total' | 'unit'
   }
}

export default function Gift({ gift, opts }: GiftProps) {
   const [renderGiftPreviewModal, setRenderGiftPreviewModal] = useState(false)
   const [giftToPreview, setGiftToPreview] = useState<Gift | null>(null)
   const { recipient = true, priceType = 'unit' } = opts ?? {}

   function renderGiftPreviewModalFn() {
      setRenderGiftPreviewModal(!renderGiftPreviewModal)
   }

   function onPreviewGift(gift: Gift) {
      setGiftToPreview(gift)
      renderGiftPreviewModalFn()
   }

   return (
      <>
         <li 
            className='flex h-12 w-full cursor-pointer items-center justify-between gap-1 hover:opacity-80'
            onClick={(onPreviewGift ? () => onPreviewGift(gift) : undefined)}
         >
            <div className='flex gap-3'>
               <GiftImage url={gift.image} alt={gift.name}/>

               <div className={`flex flex-col ${!recipient ? 'justify-center' : ''}`}>
                  <div className='flex items-center gap-1'>
                     <p className='font-semibold'>{gift.name}</p>
                     <p>({gift.quantity})</p>
                  </div>

                  {
                     (recipient) 
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

         {(renderGiftPreviewModal && giftToPreview) &&
               <GiftPreviewModal 
                  gift={giftToPreview}
                  closeModal={renderGiftPreviewModalFn}
               />
         }
      </>
   )
}  
