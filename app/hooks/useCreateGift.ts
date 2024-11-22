import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import type { Gift } from '~/types/gifts'
import useGifts from './useGifts'
import getRandomNumber from '~/utils/getRandomNumber'

interface Props {
   randomGifts: Gift[]
}

export default function useCreateGift({ randomGifts }: Props) {
   const { createGift } = useGifts()
   const [gift, setGift] = useState<Gift>({
      quantity: 0,
      image: '',
      price: 0,
      recipient: '',
      name: '',
      id: null
   })

   function onChange(event: React.ChangeEvent) {
      const target = event.target as HTMLInputElement
      const isGiftKey = Object.keys(gift).includes(target.name)

      if (!isGiftKey) return

      if(target.name === 'quantity' || target.name === 'price') { 
         setGift({ 
            ...gift, 
            [target.name]: Number(target.value) 
         })

         return
      }

      setGift({ ...gift, [target.name]: target.value })
   }

   function submit() {
      createGift({ ...gift, id: uuid() })

      setGift({
         quantity: 0,
         image: '',
         price: 0,
         recipient: '',
         name: '',
         id: null
      })
   }

   function getRandomGift() {
      const index = getRandomNumber(0, randomGifts.length) 
      const randomGift = randomGifts[index]

      setGift({ 
         ...gift, 
         name: randomGift.name, 
         image: randomGift.image 
      })
   }

   return {
      gift,
      submit,
      onChange,
      getRandomGift,
   }
}
