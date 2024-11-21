interface Props {
   id?: string
   name?: 'name' | 'image'  | 'recipient'
   value?: string
   defaultValue?: string
   placeholder?: HTMLInputElement['placeholder']
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
   hasError?: boolean
   ref?: React.RefObject<HTMLInputElement>
}

export default function TextInput(props: Props) {
   return(
      <label className='w-full'>
         <input
            className={
               'w-full rounded-md border-[2px] border-gray-300 p-1.5 text-gray-800' +
               `${props.hasError ? ' border-red-500' : ''}`
            }
            type="text"
            ref={props.ref}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
            defaultValue={props.defaultValue}
            value={props.value}
         />
      </label>
   )
}

