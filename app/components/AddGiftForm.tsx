import useCreateGift from '~/hooks/useCreateGift';
import type { Gift } from '~/types/gifts';
import Button from './ui/Button';
import TextInput from './add-gift/TextInput';
import NumberInput from './add-gift/NumberInput';
import ErrorMessage from './ui/ErrorMessage';

interface Props {
   randomGifts: Gift[]
}

export default function AddGiftForm({ randomGifts }: Props) {
   const { 
      gift,
      onChange, 
      error, 
      submit, 
      getRandomGift,
   } = useCreateGift({ randomGifts })

   return(
      <form 
         className='flex w-full flex-col items-center gap-2'
         onSubmit={(event) => event.preventDefault()}
      >
         <TextInput
            name='name'
            placeholder="Inserta un regalo"
            onChange={onChange}
            value={gift.name}
            hasError={error.field === 'name'}
         />

         <TextInput
            name="image"
            placeholder="Inserta una imagen"
            value={gift.image}
            onChange={onChange}
            hasError={error.field === 'image'}
         />

         <TextInput
            name="recipient"
            placeholder="Destinatario"
            value={gift.recipient}
            onChange={onChange}
            hasError={error.field === 'recipient'}
         />

         <NumberInput
            name='quantity'
            labelText="Cantidad: "
            value={gift.quantity}
            onChange={onChange}
            max={99999}
            hasError={error.field === 'quantity'}
         />

         <NumberInput
            name='price'
            labelText="Precio: $"
            value={gift.price}
            onChange={onChange}
            hasError={error.field === 'price'}
         />
         
         <Button onClick={getRandomGift}>
            Regalo aleatorio
         </Button>

         <Button
            color='green'
            onClick={submit}
            disabled={(!gift.name || !gift.recipient || !gift.quantity || !gift.price)}
         >
            Agregar
         </Button>

         {
            (error.message) 
               ? <ErrorMessage message={error.message}/>
               : null
         }
      </form>   
   )
}
