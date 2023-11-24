interface ProductPriceDetails {
   price: number
   quantity: number
}

export default function getTotalPrice(product: ProductPriceDetails[] | ProductPriceDetails) {
   let price = 0   
   const isArray = Array.isArray(product)

   if(isArray) { 
      product.forEach((el) => {
         if(el.price === 1) price = price + el.price
         if(el.price > 1) {
            const multiply = el.price * el.quantity
            price = price + multiply
         }
      })
   }

   if(!isArray) price = product.price * product.quantity

   return price
}
