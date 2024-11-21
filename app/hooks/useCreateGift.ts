import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import type { GiftError, Gift } from '~/types/gifts'
import { validateGiftFields } from '~/utils/create-gift/validateGiftFields'
import useGifts from './useGifts'
import getRandomNumber from '~/utils/getRandomNumber'

interface UseGiftProps {
   closeModal: () => void
   randomGifts: Gift[]
}

export default function useCreateGift({ closeModal, randomGifts }: UseGiftProps) {
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

   const resetErrorState = () => setError({ message: '', field: null })

   function onChange(event: React.ChangeEvent) {
      const target = event.target as HTMLInputElement
      const isGiftKey = Object.keys(gift).includes(target.name)

      if (!isGiftKey) return

      if (target.name === error.field) resetErrorState()

      if(target.name === 'quantity' || target.name === 'price') { 
         setGift({ 
            ...gift, 
            [target.name]: Number(target.value) 
         })

         return
      }

      setGift({ ...gift, [target.name]: target.value })
   }

   function handleCreateGift() {
      const hasError = validateGiftFields(gift)
      if (hasError) return setError(hasError)
      
      resetErrorState()
      createGift({ ...gift, id: uuid() })
      closeModal()
   }

   function onInsertRandomGift() {
      const $inputName = document.getElementById('input-gift-name') as HTMLInputElement
      const $inputImage = document.getElementById('input-gift-image') as HTMLInputElement

      const index = getRandomNumber(0, randomGifts.length) 
      const gift = randomGifts[index]

      $inputName.value = gift.name
      $inputImage.value = gift.image

      setGift({
         ...gift,
         name: gift.name,
         image: gift.image
      })
   }

   return {
      handleCreateGift,
      onChange,
      onInsertRandomGift,
      error,
   }
}
