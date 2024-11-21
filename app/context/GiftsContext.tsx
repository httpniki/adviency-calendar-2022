import React, { useEffect, useState } from 'react'
import type { GiftProviderProps , Gift, GiftContextValue } from '~/types/gifts'
import getGifs from '~/utils/gift/getGifts'
import setGift from '~/utils/gift/saveGift'

export const GiftContext = React.createContext<GiftContextValue | null>(null)

export function GiftProvider({ children }: GiftProviderProps) {
   const [gifts, setGifts] = useState<Gift[]>([])

   useEffect(refetchGifts,[])

   function refetchGifts() {
      setGifts(getGifs())
   }

   function removeAllGifts() {
      setGift([])
      refetchGifts()
   }

   function createGift(gift: Gift) {
      setGift(gift)
      refetchGifts()
   }

   function deleteGift(giftID: Gift['id']) {
      const updatedGifts = gifts.filter(el => el.id !== giftID)
      setGift(updatedGifts)
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

