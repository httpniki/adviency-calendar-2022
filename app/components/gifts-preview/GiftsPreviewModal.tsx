import { useEffect, useState } from 'react';

import useGifts from '~/hooks/useGifts';
import Gift from '../gift/Gift'
import getTotalPrice from '~/utils/getTotalPrice'
import GiftsPreviewModalLayout from './GiftsPreviewModalLayout';
import modifyPrintStyles from '~/utils/gifts-preview/modifyPrintStyles';
import convertToDecimalNumber from '~/utils/convertToDecimalNumber';

interface GiftsPreviewModalProps {
   closeModal: () => void
}

export default function GiftsPreviewModal({ closeModal }: GiftsPreviewModalProps) {
   const { gifts } = useGifts()
   const [totalPrice, setTotalPrice] = useState<string>('0')

   useEffect(() => {
      if(!gifts || !gifts.length) return

      const finalPrice = getTotalPrice(gifts)
      setTotalPrice(convertToDecimalNumber(finalPrice))
   },[gifts])

   function onPrintGiftsList() {
      Promise.all([
         window.addEventListener('beforeprint', () => modifyPrintStyles('beforeprint')),
         window.addEventListener('afterprint', () => modifyPrintStyles('afterprint'))
      ]
      ).then(() => {
         window.print()
      }).finally(() => {
         window.removeEventListener('beforeprint', () => modifyPrintStyles('beforeprint'))
         window.removeEventListener('afterprint', () => modifyPrintStyles('afterprint'))
      })
   }

   return(
      <GiftsPreviewModalLayout
         closeModal={closeModal}
         totalPrice={totalPrice}
         onPrint={onPrintGiftsList}
      >
         {
            (gifts.length) 
               ? gifts.map((el, index) => {
                  return <Gift 
                     key={index}
                     gift={el}
                     opts={{ 
                        priceType: 'total', 
                        recipient: false 
                     }}
                  />   
               })
               : null
         }
      </GiftsPreviewModalLayout>
   )
}
