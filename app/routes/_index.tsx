import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

import RenderGifts from '~/components/RenderGifts';
import GiftsActions from '~/components/GiftsActions';
import Button from '~/components/ui/Button';
import RenderModal from '~/components/RenderModal';
import AddGiftModal from '~/components/add-gift/AddGiftModal';
import getRandomGifts from '~/utils/getRandomGifts';
import type { Gift } from '~/types/gifts';
import AppMusic from '~/components/AppMusic';

export async function loader() {
   const randomGifts: Gift[] = await getRandomGifts()
   return json(randomGifts)
}

export const meta: MetaFunction = () => {
   return [
      { title: 'Adviency Calendar 2022' },
      { name: '', content: '' }
   ];
};

export default function Index() {
   const randomGifts = useLoaderData<typeof loader>()
   
   const [renderAddGiftModal, setRenderAddGiftModal] = useState(false)

   function renderAddGiftModalFn() {
      setRenderAddGiftModal(!renderAddGiftModal)
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
                  onClick={renderAddGiftModalFn}
               >
                  Agregar regalo
               </Button>

               <ul className="flex flex-col gap-4 py-5">
                  <RenderGifts />
               </ul>

               <GiftsActions />
            </div>
         </main>

         <AppMusic/>

         <RenderModal>
            {(renderAddGiftModal) && 
               <AddGiftModal 
                  closeModal={renderAddGiftModalFn}
                  randomGifts={randomGifts}
               />
            }
         </RenderModal>
      </>
   );
}
