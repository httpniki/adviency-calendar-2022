import type { Gift } from '~/types/gifts'

export const giftInitialState: Gift = {
   quantity: 0,
   image: '',
   price: 0,
   recipient: '',
   name: '',
   id: null
}

export const giftErrorInitialState = { 
   field: null, 
   message: '' 
}

export const renderModalInitialState = { 
   addGift: false, 
   giftsPreview: false,
   giftPreview: false,
   confirmationPrompt: false
}
