import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import type { GiftError, Gift } from '~/types/gifts'
import { validateGiftFields } from '~/utils/create-gift/validateGiftFields'
import useGifts from './useGifts'
import getRandomNumber from '~/utils/getRandomNumber'

interface Props {
   randomGifts: Gift[]
}

export default function useCreateGift({  randomGifts }: Props) {
   const { createGift } = useGifts()
   const [gift, setGift] = useState<Gift>({
      quantity: 0,
      image: '',
      price: 0,
      recipient: '',
      name: '',
      id: null
   })
   const [error, setError] = useState<GiftError>({ 
      field: null, 
      message: '' 
   })

   function onChange(event: React.ChangeEvent) {
      const target = event.target as HTMLInputElement
      const isGiftKey = Object.keys(gift).includes(target.name)

      if (!isGiftKey) return

      if (target.name === error.field) setError({ field: null, message: '' })

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
      const hasError = validateGiftFields(gift)
      if (hasError) return setError(hasError)
      
      setError({ field: null, message: '' })

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
      error,
   }
}
