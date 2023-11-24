import type { Gift } from '~/types/gifts';

interface SetGiftInputValueArgs {
   nameValue: Gift['name']
   imageValue: Gift['image']
}

export default function setGiftInputValue({ nameValue, imageValue }: SetGiftInputValueArgs) {
   const $inputName = document.getElementById('input-gift-name') as HTMLInputElement
   const $inputImage = document.getElementById('input-gift-image') as HTMLInputElement
   
   const errorMessage = (input: string) => `input ${input} not found`

   if(!$inputName) throw new Error(errorMessage('name'))
   if(!$inputImage) throw new Error(errorMessage('image'))

   $inputName.value = nameValue
   $inputImage.value = imageValue
}
