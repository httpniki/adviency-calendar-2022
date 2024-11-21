import type { GiftError } from '~/types/gifts'
import ErrorMessage from '../ui/ErrorMessage'

interface Props {
   id?: string
   className?: string
   name?: string
   max?: number
   labelText?: string
   defaultValue?: number
   onChange?: (event: React.ChangeEvent) => void
   error: GiftError
}

export default function AddGiftNumberInput({ 
   id = '', 
   className = '',
   labelText = '' ,
   name = '',
   defaultValue = 0,
   onChange,
   error,
}: Props){
   return(
      <div className='flex flex-col items-center'>
         <div>
            <label htmlFor={id}>{labelText}</label>
            <input 
               id={id}
               className={'text-center ml-1 min-w-[40px] max-w-[90px] rounded-sm text-gray-800 border-[2px] border-gray-300' + className}
               type="number"
               name={name}
               defaultValue={defaultValue}
               onChange={onChange}
               min={0}
            />

         </div>
         {
            (error.field === name) 
               ? <ErrorMessage message={error.message}/>
               : null
         }
      </div>
   )
}
