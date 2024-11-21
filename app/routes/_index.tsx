import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

import ConfirmationPromptModal from '../components/ui/ConfirmationPrompt';
import Button from '~/components/ui/Button';
import RenderModal from '~/components/RenderModal';
import AddGiftForm from '~/components/AddGiftForm';
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
   giftsPreview: boolean
   deleteAllGiftsPrompt: boolean
}

export default function Index() {
   const randomGifts = useLoaderData<typeof loader>()
   const { removeAllGifts, gifts } = useGifts()
   const [renderModal, setRenderModal] = useState<RenderModalState>({ 
      giftsPreview: false, 
      deleteAllGiftsPrompt: false 
   })

   function onRemoveGifts() {
      removeAllGifts()
      setRenderModal({ ...renderModal, deleteAllGiftsPrompt: false })
   }

   return (
      <main className="flex min-h-screen items-center justify-center bg-cover p-2 sm:h-screen">
         <article className='flex h-full w-full max-w-[1360px] flex-col-reverse gap-2 sm:flex-row'>
            <section className="flex h-full flex-1 flex-col gap-2 rounded-lg bg-white p-5">
               <h1 className="my-2 text-center font-christmas text-4xl sm:my-5 sm:text-6xl">
                  Regalos:
               </h1>

               <GiftList />

               <Button 
                  color='green'
                  onClick={() => setRenderModal({ ...renderModal, giftsPreview: true })}
                  disabled={gifts.length === 0}
               >
                  Previsualizar
               </Button>

               <Button 
                  onClick={() => setRenderModal({ ...renderModal, deleteAllGiftsPrompt: true })}
                  disabled={gifts.length === 0}
               >
                  Borrar todo
               </Button>

               <AppMusic/>
            </section>

            <section className='h-full w-full rounded-lg bg-white px-6 py-5 md:max-w-[380px]'>
               <h2 className="mb-3 text-center text-xl font-bold">
                  Agregar un regalo
               </h2>

               <AddGiftForm randomGifts={randomGifts}/>
            </section>

            <RenderModal>
               {(renderModal.deleteAllGiftsPrompt) &&
                  <ConfirmationPromptModal 
                     message='¿Estas seguro de eliminar todos los regalos?'
                     onClick={onRemoveGifts}
                     closeModal={() => setRenderModal({ ...renderModal, deleteAllGiftsPrompt: false })}
                  />
               }

               {(renderModal.giftsPreview) && 
                  <GiftsPreviewModal
                     closeModal={() => setRenderModal({ ...renderModal, giftsPreview: false })}
                  />
               }
            </RenderModal>         
         </article>
      </main>
   );
}


