import AppModal from './AppModal';
import Button from './Button';

interface ConfirmationPromptProps {
   onClick: (event: React.MouseEvent) => void
   closeModal: () => void
   children: React.ReactNode
}

export default function ConfirmationPrompt({ onClick, closeModal, children }: ConfirmationPromptProps) {
   return(
      <AppModal closeModal={closeModal}>
         <div className="flex w-[350px] flex-col gap-1 rounded-lg bg-white p-6">
            <h2 className="mb-2 text-center text-lg font-bold">
               {children}
            </h2>

            <Button 
               color='green'
               onClick={closeModal} 
            >
               Cancelar
            </Button>
            <Button onClick={onClick}>
               Confirmar
            </Button>
         </div>
      </AppModal>
   )
}
