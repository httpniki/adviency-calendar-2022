import {  useState } from 'react'
import { v4 as uuid } from 'uuid'

import type { GiftError, Gift } from '~/types/gifts'
import getRandomGiftIndex from '~/utils/create-gift/insert-random-gift/getRandomGiftIndex'
import setGiftInputValue from '~/utils/create-gift/insert-random-gift/setGiftInputValue'
import { validateGiftFields } from '~/utils/create-gift/validateGiftFields'
import useGifts from './useGifts'

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

   const [savedRandomGiftIndex, setSavedRandomGiftIndex] = useState(0)

   const resetErrorState = () => setError({ message: '', field: null })

   function onChange(event: React.ChangeEvent) {
      const target = event.target as HTMLInputElement
      const giftPropsName = Object.keys(gift)

      if (!giftPropsName.includes(target.name)) return
      if (target.name === error.field) resetErrorState()

      if(target.name === 'quantity' || target.name === 'price') return setGift({ 
         ...gift, 
         [target.name]: Number(target.value) 
      })

      setGift({ ...gift, [target.name]: target.value })
   }

   function onCreateGift() {
      const hasError = validateGiftFields(gift)
      if (hasError) return setError(hasError)
      
      resetErrorState()
      createGift({ ...gift, id: uuid() })
      closeModal()
   }

   function onInsertRandomGift() {
      const index = getRandomGiftIndex({
         giftsLength: randomGifts.length,
         lastIndex: savedRandomGiftIndex
      })

      setSavedRandomGiftIndex(index)
      const selectedGift = randomGifts[index]

      setGiftInputValue({
         nameValue: selectedGift.name,
         imageValue: selectedGift.image
      })

      setGift({
         ...gift,
         name: selectedGift.name,
         image: selectedGift.image
      })
   }

   return {
      onCreateGift,
      onChange,
      onInsertRandomGift,
      error,
   }
}
