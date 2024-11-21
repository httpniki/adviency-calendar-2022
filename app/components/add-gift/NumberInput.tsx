interface Props {
   id?: string
   className?: string
   name?: string
   max?: number
   labelText?: string
   defaultValue?: number
   value?: number
   onChange?: (event: React.ChangeEvent) => void
   hasError?: boolean
   ref?: React.RefObject<HTMLInputElement>
}

export default function NumberInput(props: Props) {
   return(
      <label className="flex items-center gap-1">
         <p className='block'>{props.labelText}</p>
         <input 
            className={
               'text-center max-w-[90px] rounded-sm text-gray-800 border-[2px] border-gray-300' + 
               `${props.className ? '' + props.className : ''}` +
               `${props.hasError ? ' border-red-500' : ''}`
            }
            id={props.id}
            ref={props.ref}
            type="number"
            name={props.name}
            defaultValue={props.defaultValue}
            value={props.value}
            onChange={props.onChange}
            min={0}
         />
      </label>
   )
}
