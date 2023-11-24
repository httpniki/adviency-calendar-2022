import Button from '../Button';
import RenderModal from '../RenderModal';
import ConfirmationPromptModal from '../ConfirmationPrompt';
import useGifts from '~/hooks/useGifts';
import { useState } from 'react';
import GiftsPreviewModal from '../gifts-preview/GiftsPreviewModal';

export default function GiftsActions() {
   const { removeGifts } = useGifts()
   const [renderConfirmationAlert, setRenderConfirmationAlert] = useState(false)
   const [renderGiftsPreview, setRenderGiftsPreview] = useState(false)

   const renderConfirmationAlertFn = () => 
      setRenderConfirmationAlert(!renderConfirmationAlert)
   
   const renderGiftsPreviewFn = () => 
      setRenderGiftsPreview(!renderGiftsPreview)

   function onRemoveGifts() {
      removeGifts()
      renderConfirmationAlertFn()
   }

   return (
      <>
         <Button 
            color='green'
            onClick={renderGiftsPreviewFn}
         >
            Previsualizar
         </Button>

         <Button 
            onClick={renderConfirmationAlertFn}
         >
            Borrar todo
         </Button>
            
         <RenderModal>
            {(renderConfirmationAlert) &&
               <ConfirmationPromptModal 
                  closeModal={renderConfirmationAlertFn}
                  onClick={onRemoveGifts}
               >
                  ¿Estas seguro de eliminar todos los regalos?
               </ConfirmationPromptModal>
            }

            {renderGiftsPreview && 
               <GiftsPreviewModal
                  closeModal={renderGiftsPreviewFn}
               />
            }
         </RenderModal>
      </>
   )
}
