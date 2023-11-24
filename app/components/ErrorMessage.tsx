interface ErrorMessageProps {
   message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {

   return(
      <p className='max-w-full text-center text-red-600'>
         * {message}
      </p>
   )
}
