import type { Gift } from '~/types/gifts';
import setDefaultImage from '~/utils/setDefaultImage';

interface GiftImageProps {
   url: Gift['image']
   alt: string
}

export default function GiftImage({ url, alt }: GiftImageProps) {
   return(
      <figure className='flex h-12 w-12 items-center justify-center'>
         <img 
            src={url} 
            alt={alt}
            onError={setDefaultImage}
         />
      </figure>
   )
}
