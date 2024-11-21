import { useEffect, useState } from 'react';

import useGifts from '~/hooks/useGifts';
import Gift from './Gift'
import getTotalPrice from '~/utils/getTotalPrice'
import convertToDecimalNumber from '~/utils/convertToDecimalNumber';
import Button from './ui/Button';
import AppModal from './ui/AppModal';

interface Props {
   closeModal: () => void
}

export default function GiftsPreviewModal({ closeModal }: Props) {
   const { gifts } = useGifts()
   const [totalPrice, setTotalPrice] = useState<string>('0')

   useEffect(() => {
      if(!gifts.length) return
      const finalPrice = getTotalPrice(gifts)
      setTotalPrice(convertToDecimalNumber(finalPrice))
   },[gifts])

   useEffect(() => {
      const $bgModal = document.querySelector('#modal-bg') as HTMLElement
      const $modalPrintBtn = document.querySelector('#modal-print-btn') as HTMLButtonElement
      const $closeModalBtn = document.querySelector('#close-modal-btn') as HTMLButtonElement

      function setPrintStyles() {
         $bgModal.classList.add('bg-image')
         $modalPrintBtn.style.display = 'none'
         $closeModalBtn.style.display = 'none'
      }

      function removePrintStyle() {
         $bgModal.classList.remove('bg-image')
         $modalPrintBtn.style.display = 'block'
         $closeModalBtn.style.display = 'block'
      }

      window.addEventListener('beforeprint', setPrintStyles)
      window.addEventListener('afterprint', removePrintStyle)

      return () => {
         window.removeEventListener('beforeprint', setPrintStyles)
         window.removeEventListener('afterprint', removePrintStyle)
      }
   },[])

   return(
      <AppModal closeModal={closeModal}>
         <h2 className='my-2 font-christmas text-5xl'>
            Regalos
         </h2>
            
         <ul className='flex w-full flex-col gap-4 overflow-auto'>
            {(gifts.length > 0) && 
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

         <p className='py-2'>Total: ${totalPrice}</p>

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
