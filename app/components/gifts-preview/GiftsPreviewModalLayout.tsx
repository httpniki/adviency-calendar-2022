import AppModal from '../AppModal'
import Button from '../Button'

interface GiftsPreviewModalLayoutProps {
   children: React.ReactNode
   closeModal: () => void
   totalPrice: string | number
   onPrint: () => void
}

export default function GiftsPreviewModalLayout({ 
   children, 
   closeModal, 
   totalPrice, 
   onPrint 
}: GiftsPreviewModalLayoutProps) {
   return(
      <AppModal closeModal={closeModal}>
         <h2 className='my-2 font-christmas text-5xl'>
            Regalos
         </h2>
            
         <ul className='flex w-full flex-col gap-3'>
            {children}
         </ul>

         <p>Total: ${totalPrice}</p>

         <div className='flex w-full gap-1'>
            <Button 
               id='modal-print-btn'
               color='green'
               onClick={onPrint}
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
