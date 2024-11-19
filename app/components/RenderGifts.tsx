import GiftView from '~/components/gift/Gift'
import useGifts from '~/hooks/useGifts'

function NoGiftsMessage() {
   return(
      <li className="text-center text-xl font-bold text-gray-400">
         ¡No hay regalos por aqui!
      </li>
   )
}

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
