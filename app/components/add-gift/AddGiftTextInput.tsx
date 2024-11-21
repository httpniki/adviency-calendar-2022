import type { GiftError } from '~/types/gifts'
import ErrorMessage from '../ui/ErrorMessage'

interface Props {
   id?: string
   name?: 'name' | 'image'  | 'recipient'
   placeholder?: HTMLInputElement['placeholder']
   defaultValue?: string
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
   error: GiftError
}

export default function AddGiftTextInput({ 
   id,
   name, 
   defaultValue = '',
   placeholder = '', 
   onChange,
   error,
}: Props) {
   return(
      <div className='w-full'>
         <input
            id={id}
            name={name}
            className="w-full rounded-md border-[2px] border-gray-300 p-[6px] text-gray-800"
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={defaultValue}
         />

         {
            (error.field === name)
               ? <ErrorMessage message={error.message}/>               
               : null
         }
      </div>
   )
}
