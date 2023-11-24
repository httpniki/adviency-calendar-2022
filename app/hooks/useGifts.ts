import { useContext } from 'react'
import { GiftContext } from '~/context/GiftsContext'

export default function useGifts() {
   const context = useContext(GiftContext)

   if(!context) throw new Error('Context not found')

   return context 
}
