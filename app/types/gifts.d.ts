export interface Gift {
   name: string
   recipient: string
   image: string
   quantity: number
   price: number
   id: string | null
}

export interface GiftContextValue {
   gifts: Gift[]
   refetchGifts: () => void
   removeAllGifts: () => void
   createGift: (gift: Gift) => void
   deleteGift: (giftID: Gift['id']) => void
}

export interface GiftProviderProps {
   children: React.ReactNode
}
