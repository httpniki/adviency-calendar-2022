import Button from './ui/Button';
import RenderModal from './RenderModal';
import ConfirmationPromptModal from './ui/ConfirmationPrompt';
import useGifts from '~/hooks/useGifts';
import { useState } from 'react';
import GiftsPreviewModal from './GiftsPreviewModal';

export default function GiftsActions() {
   const { removeAllGifts } = useGifts()
   const [renderConfirmationAlert, setRenderConfirmationAlert] = useState(false)
   const [renderGiftsPreview, setRenderGiftsPreview] = useState(false)

   function renderConfirmationAlertFn() {
      setRenderConfirmationAlert(!renderConfirmationAlert)
   }
   
   function renderGiftsPreviewFn() {
      setRenderGiftsPreview(!renderGiftsPreview)
   } 

   function onRemoveGifts() {
      removeAllGifts()
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
                  message='¿Estas seguro de eliminar todos los regalos?'
               />
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
