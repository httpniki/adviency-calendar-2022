import { useEffect } from 'react'

interface Props {
   type?: 'form' | 'div'
   className?: string
   children: React.ReactNode
   closeModal: () => void
   id?: string
}

export default function AppModal(props: Props) {
   const className = 'relative flex max-w-[420px] w-full flex-col items-center gap-2 rounded-lg bg-white px-6 py-5' + 
   `${props.className ? ' ' + props.className : ''}`

   useEffect(() => {
      const $modal = document.getElementById('modal-bg') as HTMLDivElement

      function unrenderModal(event: MouseEvent) {
         const target = event.target as HTMLDivElement
         if(target !== $modal) return
         props.closeModal()
      }
   
      $modal.addEventListener('click', unrenderModal)
      return () => $modal.removeEventListener('click', unrenderModal)
   },[props.closeModal])

   return(
      <div 
         className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30"
         id='modal-bg' 
      >
         {
            (props.type === 'form') &&
            <form 
               className={className}
               onSubmit={(event) => event.preventDefault()}
               id={props.id}
            >
               {props.children}
            </form>
         }

         {
            (!props.type || props.type === 'div') &&
            <div 
               className={className}
               id={props.id}
            >
               {props.children}
            </div>
         }
      </div>
   )
}
