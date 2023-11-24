import getRandomNumber from '~/utils/getRandomNumber'

interface GetRandomGiftIndexArgs {
   giftsLength: number
   lastIndex: number
}

export default function getRandomGiftIndex({ giftsLength, lastIndex }: GetRandomGiftIndexArgs) {
   const min = 0
   const max = giftsLength
   let index = getRandomNumber(min, max) 

   for(let i = 0; index === lastIndex; i++) {
      index = getRandomNumber(min, max)
   }

   return index
}
