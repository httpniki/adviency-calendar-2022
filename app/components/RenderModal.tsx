import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

interface RenderModalProps {
   children: React.ReactNode
}


export default function RenderModal({ children }: RenderModalProps) {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
   },[])

   return (mounted) 
      ? ReactDOM.createPortal(
         children, 
         document.getElementById('modal-root') as HTMLElement
      )
      : null
}
