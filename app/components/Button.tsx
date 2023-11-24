interface ButtonProps {
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
}: ButtonProps ) {
   const colorVariants = {
      red: 'bg-red-700',
      green: 'bg-green-600'
   }

   return(
      <button 
         className={`h-10 w-full rounded-md text-white ${colorVariants[color]} ${className}`}
         onClick={onClick}
         id={id}
      >
         {children}
      </button>
   )
}
