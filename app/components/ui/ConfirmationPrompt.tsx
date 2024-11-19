import AppModal from '../AppModal';
import Button from '../ui/Button';

interface Props {
   onClick: (event: React.MouseEvent) => void
   closeModal: () => void
   message: string
}

export default function ConfirmationPrompt({ onClick, closeModal, message }: Props) {
   return(
      <AppModal closeModal={closeModal}>
         <div className="flex w-[350px] flex-col gap-1 rounded-lg bg-white p-6">
            <h2 className="mb-2 text-center text-lg font-bold">
               {message}
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
