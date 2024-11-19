import type { Gift } from '~/types/gifts';
import fetchGifts from './fetchGifts';

export default function saveGift(gift: Gift | Gift[]) {
   const savedGifts = fetchGifts()  
   let gifts: Gift[] = []
   
   if(Array.isArray(gift)) gifts = gift

   if(!savedGifts) gifts = new Array(gift as Gift)

   if(gift && savedGifts && !Array.isArray(gift)) gifts = savedGifts.concat(gift)   

   window.localStorage.setItem('gifts', JSON.stringify(gifts))
}
