import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

import ConfirmationPromptModal from '../components/ui/ConfirmationPrompt';
import Button from '~/components/ui/Button';
import RenderModal from '~/components/RenderModal';
import AddGiftModal from '~/components/AddGiftModal';
import getRandomGifts from '~/utils/gift/getRandomGifts';
import type { Gift } from '~/types/gifts';
import AppMusic from '~/components/AppMusic';
import GiftList from '~/components/GiftList';
import useGifts from '~/hooks/useGifts';
import GiftsPreviewModal from '~/components/GiftsPreviewModal';

export async function loader() {
   const randomGifts: Gift[] = await getRandomGifts()
   return json(randomGifts)
}

export const meta: MetaFunction = () => {
   return [
      { title: 'Adviency Calendar 2022' },
   ];
};

interface RenderModalState {
   addGiftModal: boolean
   giftsPreview: boolean
   deleteAllGiftsPopup: boolean
}

export default function Index() {
   const randomGifts = useLoaderData<typeof loader>()
   const { removeAllGifts } = useGifts()
   const [renderModal, setRenderModal] = useState<RenderModalState>({ 
      addGiftModal: false, 
      giftsPreview: false, 
      deleteAllGiftsPopup: false 
   })

   function onRemoveGifts() {
      removeAllGifts()
      setRenderModal({ ...renderModal, deleteAllGiftsPopup: false })
   }

   return (
      <>
         <main className="flex min-h-screen items-center justify-center bg-cover">
            <div className="flex w-[400px] flex-col gap-1 rounded-lg bg-white p-5">
               <h1 className="my-5 text-center font-christmas text-6xl">
                  Regalos:
               </h1>

               <Button
                  className="rounded-xl"
                  onClick={() => setRenderModal({ ...renderModal, addGiftModal: true })}
               >
                  Agregar regalo
               </Button>

               <GiftList />

               <Button 
                  color='green'
                  onClick={() => setRenderModal({ ...renderModal, giftsPreview: true })}
               >
                  Previsualizar
               </Button>

               <Button onClick={() => setRenderModal({ ...renderModal, deleteAllGiftsPopup: true })}>
                  Borrar todo
               </Button>

            </div>
         </main>

         <AppMusic/>

         <RenderModal>
            {(renderModal.addGiftModal) && 
               <AddGiftModal
                  closeModal={() =>  setRenderModal({ ...renderModal, addGiftModal: false })}
                  randomGifts={randomGifts}
               />
            }

            {(renderModal.deleteAllGiftsPopup) &&
               <ConfirmationPromptModal 
                  message='¿Estas seguro de eliminar todos los regalos?'
                  onClick={onRemoveGifts}
                  closeModal={() => setRenderModal({ ...renderModal, deleteAllGiftsPopup: false })}
               />
            }

            {(renderModal.giftsPreview) && 
               <GiftsPreviewModal
                  closeModal={() => setRenderModal({ ...renderModal, giftsPreview: false })}
               />
            }
         </RenderModal>
      </>
   );
}
