import GiftView from '~/components/Gift'
import useGifts from '~/hooks/useGifts'

function NoGiftsMessage() {
   return(
      <li className="text-center text-xl font-bold text-gray-400">
         ¡No hay regalos por aqui!
      </li>
   )
}

export default function GiftList() {
   const { gifts } = useGifts()

   return(
      <ul className="flex flex-col gap-4 py-5">
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
      </ul>
   )
}
