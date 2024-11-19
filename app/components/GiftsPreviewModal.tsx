import { useEffect, useState } from 'react';

import useGifts from '~/hooks/useGifts';
import Gift from './gift/Gift'
import getTotalPrice from '~/utils/getTotalPrice'
import modifyPrintStyles from '~/utils/gifts-preview/modifyPrintStyles';
import convertToDecimalNumber from '~/utils/convertToDecimalNumber';
import Button from './ui/Button';
import AppModal from './AppModal';

interface Props {
   closeModal: () => void
}

export default function GiftsPreviewModal({ closeModal }: Props) {
   const { gifts } = useGifts()
   const [totalPrice, setTotalPrice] = useState<string>('0')

   useEffect(() => {
      if(!gifts || !gifts.length) return

      const finalPrice = getTotalPrice(gifts)
      setTotalPrice(convertToDecimalNumber(finalPrice))
   },[gifts])

   useEffect(() => {
      window.addEventListener('beforeprint', () => modifyPrintStyles('beforeprint'))
      window.addEventListener('afterprint', () => modifyPrintStyles('afterprint'))

      return () => {
         window.removeEventListener('beforeprint', () => modifyPrintStyles('beforeprint'))
         window.removeEventListener('afterprint', () => modifyPrintStyles('afterprint'))
      }
   },[])

   return(
      <AppModal closeModal={closeModal}>
         <h2 className='my-2 font-christmas text-5xl'>
            Regalos
         </h2>
            
         <ul className='flex w-full flex-col gap-3'>
            {
               (gifts.length > 0) && 
               gifts.map((el, index) => {
                  return <Gift 
                     key={index}
                     gift={el}
                     opts={{ 
                        priceType: 'total', 
                        recipient: false 
                     }}
                  />   
               })
            }
         </ul>

         <p>Total: ${totalPrice}</p>

         <div className='flex w-full gap-1'>
            <Button
               id='modal-print-btn'
               color='green'
               onClick={() => window.print()}
            >
               Imprimir
            </Button>
            <Button 
               id='close-modal-btn'
               onClick={closeModal}
            >
               Cerrar
            </Button>
         </div>
      </AppModal>
   )
}
