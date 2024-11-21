import { useEffect, useState } from 'react'
import type { Gift } from '~/types/gifts'
import convertToDecimalNumber from '~/utils/convertToDecimalNumber'
import getTotalPrice from '~/utils/getTotalPrice'
import useGifts from './useGifts'

interface Props {
   closeModal: () => void
   gift: Gift
}

export default function useGiftPreview({ closeModal, gift }: Props) {
   const { deleteGift } = useGifts()
   const [finalPrice, setFinalPrice] = useState<string>('0')
   const [renderConfirmationPopup, setRenderConfirmationPopup] = useState(false)

   useEffect(() => {
      if(!gift.price) return
         
      const total = getTotalPrice({ price: gift.price, quantity: gift.quantity })
      setFinalPrice(convertToDecimalNumber(total))
   } , [gift])

   function onDeleteGift() {
      deleteGift(gift.id)
      setRenderConfirmationPopup(false)
      closeModal()
   }

   return {
      deleteGift: onDeleteGift,
      finalPrice,
      renderConfirmationPopup,
      setRenderConfirmationPopup
   }
}
