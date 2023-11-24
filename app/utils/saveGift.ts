import type { Gift } from '~/types/gifts';
import fetchGifts from './fetchGifts';

export default function saveGift(gift: Gift | Gift[] | null) {
   const savedGifts = fetchGifts()  
   let giftsToSave: Gift[] = []
   
   if(!gift) giftsToSave = []
   if(Array.isArray(gift)) giftsToSave = gift
   if(!savedGifts) giftsToSave = new Array(gift as Gift)
   if(gift && savedGifts && !Array.isArray(gift)) giftsToSave = savedGifts.concat(gift)   

   window.localStorage.setItem('gifts', JSON.stringify(giftsToSave))
}
