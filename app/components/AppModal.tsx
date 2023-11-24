import ModalBG from './ModalBG'

interface ModalProps {
   type?: 'form' | 'div'
   className?: string
   children: React.ReactNode
   closeModal: () => void
   id?: string
}

export default function AppModal({ type='div', className='', children, closeModal, id }: ModalProps) {
   const $className = 'relative flex min-w-[350px] flex-col items-center gap-2 rounded-lg bg-white px-6 py-5 ' +  className

   return(
      <ModalBG closeModal={closeModal}>
         {
            (type === 'form') &&
            <form 
               className={$className}
               onSubmit={(event) => event.preventDefault()}
               id={id}
            >
               {children}
            </form>
         }

         {
            (type === 'div') &&
            <div 
               className={$className}
               id={id}
            >
               {children}
            </div>
         }
      </ModalBG>
   )
}
