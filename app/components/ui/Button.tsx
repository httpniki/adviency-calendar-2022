interface Props {
   children: React.ReactNode
   className?: string
   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
   color?: 'red' | 'green'
   id?: string
}

export default function Button({ 
   children, 
   className='', 
   onClick, 
   color = 'red' ,
   id
}: Props ) {
   const colorVariants = {
      red: 'bg-red-700',
      green: 'bg-green-600'
   }

   return(
      <button 
         className={`h-10 w-full rounded-md text-white ${colorVariants[color]} ${className}`}
         id={id}
         onClick={onClick}
      >
         {children}
      </button>
   )
}
