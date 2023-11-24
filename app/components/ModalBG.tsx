import { useEffect } from 'react'

interface ModalBGProps {
   children: React.ReactNode
   closeModal: () => void
}

export default function ModalBG({ children, closeModal: renderModal }: ModalBGProps) {
   useEffect(() => {
      const $modal = document.getElementById('modal-bg')

      function closeModal(event: MouseEvent) {
         const target = event.target as HTMLDivElement
         if(target !== $modal) return
         renderModal()
      }
   
      $modal?.addEventListener('click', closeModal)
      return () => $modal?.removeEventListener('click', closeModal)
   },[renderModal])

   return(
      <div 
         id='modal-bg' 
         className="fixed inset-0 z-10 flex  items-center justify-center bg-black bg-opacity-30"
      >
         {children}
      </div>
   )
}
