import { useEffect, useState } from 'react'
import convertToDecimalNumber from '~/utils/convertToDecimalNumber'
import getTotalPrice from '~/utils/getTotalPrice'

interface GiftPriceProps {
   quantity: number
   price: number
   priceType: 'unit' | 'total' 
}

export default function GiftPrice({ price, quantity, priceType }: GiftPriceProps) {
   const [giftPrice, setGiftPrice] = useState<string>(convertToDecimalNumber(price))

   useEffect(() => {
      if(priceType === 'unit') return

      const finalPrice = getTotalPrice({
         quantity: quantity,
         price
      })

      setGiftPrice(convertToDecimalNumber(finalPrice))
   }, [price, quantity, priceType])

   return(
      <p>
         <span>${giftPrice}</span>
         {
            (priceType === 'unit' && price > 0)
               ? <span>c/u</span>
               : null
         }
      </p>
   )
}
