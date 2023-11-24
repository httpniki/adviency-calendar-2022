import GiftView from '~/components/gift/Gift'
import useGifts from '~/hooks/useGifts'
import NoGiftsMessage from './NoGiftsMessage'



export default function RenderGifts() {
   const { gifts } = useGifts()

   return(
      <>
         {(!gifts.length) 
            ?<NoGiftsMessage/>
            : (gifts.length) && 
               gifts.map((el, index) => {
                  if(!el) return null
                  return <GiftView
                     key={index} 
                     gift={el}
                  />         
               })
         }
      </>
   )
}
