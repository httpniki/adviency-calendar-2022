interface Props {
   children: React.ReactNode
   className?: string
   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
   color?: 'red' | 'green'
   id?: string
   disabled?: boolean
}

export default function Button({ 
   children, 
   className='', 
   onClick, 
   color = 'red' ,
   id,
   disabled = false
}: Props ) {
   return(
      <button 
         className={
            'h-10 w-full rounded-md text-white' + 
            `${className ? ' ' + className : ''}` + 
            `${disabled ? ' opacity-60' : ' hover:opacity-90'}`
         }
         style={{ 
            backgroundColor: color === 'red' ? '#b91c1c' : '#16a34a'
         }}
         id={id}
         onClick={onClick}
         disabled={disabled}
      >
         {children}
      </button>
   )
}
