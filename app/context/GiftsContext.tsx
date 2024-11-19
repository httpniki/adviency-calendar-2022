import React, { useEffect, useState } from 'react'
import type { GiftProviderProps , Gift, GiftContextValue } from '~/types/gifts'
import fetchGifts from '~/utils/fetchGifts'
import saveGift from '~/utils/saveGift'

const GiftContext = React.createContext<GiftContextValue | null>(null)

function GiftProvider({ children }: GiftProviderProps) {
   const [gifts, setGifts] = useState<Gift[]>([])

   useEffect(() => {
      refetchGifts()
   },[])

   function refetchGifts() {
      const gifts = fetchGifts()
      setGifts(gifts)
   }


   function removeAllGifts() {
      saveGift([])
      refetchGifts()
   }

   function createGift(gift: Gift) {
      saveGift(gift)
      refetchGifts()
   }

   function deleteGift(giftID: Gift['id']) {
      const updatedGifts = gifts.filter(el => el.id !== giftID)
      saveGift(updatedGifts)
      refetchGifts()
   }

   return(
      <GiftContext.Provider 
         value={{
            gifts,
            refetchGifts,
            removeAllGifts,
            createGift,
            deleteGift
         }}
      >
         {children}
      </GiftContext.Provider>
   )
}

export { GiftContext, GiftProvider }
