import { useEffect, useState } from 'react'
import type { Gift } from '~/types/gifts'
import convertToDecimalNumber from '~/utils/convertToDecimalNumber'
import getTotalPrice from '~/utils/getTotalPrice'
import useGifts from './useGifts'

interface UseGiftPreviewProps {
   closeModal: () => void
   gift: Gift
}

export default function useGiftPreview({ closeModal, gift }: UseGiftPreviewProps) {
   const [finalPrice, setFinalPrice] = useState<string>('0')
   const [renderConfirmationPrompt, setRenderConfirmationPrompt] = useState(false)
   const { deleteGift } = useGifts()
   
   function renderConfirmationPromptFn() { 
      setRenderConfirmationPrompt(!renderConfirmationPrompt)
   }

   useEffect(() => {
      if(!gift.price) return
         
      const total = getTotalPrice({ price: gift.price, quantity: gift.quantity })
      setFinalPrice(convertToDecimalNumber(total))
   } , [gift])

   function onDeleteGift() {
      deleteGift(gift.id)
      renderConfirmationPromptFn()
      closeModal()
   }

   return {
      onDeleteGift,
      finalPrice,
      renderConfirmationPrompt: {
         state: renderConfirmationPrompt,
         fn: renderConfirmationPromptFn
      }
   }
}
