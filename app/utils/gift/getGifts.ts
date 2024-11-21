import type { Gift } from '~/types/gifts'

export default function getGifs(): Gift[] {
   const gifts = window.localStorage.getItem('gifts')

   if(!gifts) return []
         
   return JSON.parse(gifts) as Gift[]
}
