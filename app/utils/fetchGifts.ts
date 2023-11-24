import type { Gift } from '~/types/gifts'

export default function fetchGifts(): Gift[] | null {
   const gifts = window.localStorage.getItem('gifts')
   if(!gifts) return null
         
   const parsedGifts = JSON.parse(gifts)
   return parsedGifts
}
