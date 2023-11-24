import type { Gift, GiftError } from '~/types/gifts'

export function validateGiftFields(gift: Gift): GiftError | null {
   if(gift.name.length < 3) 
      return { field: 'name', message: 'El regalo no puede estar vacío' }

   if(gift.recipient.length < 3) 
      return { field: 'recipient', message: 'El regalo tiene que tener un destinatario' }

   if(gift.quantity === 0)
      return { field: 'quantity', message: 'La cantidad del regalo no puede ser 0' }
   
   return null
}

