import defaultImage from 'public/default-image.webp'

export default function setDefaultImage(event: React.SyntheticEvent<HTMLImageElement>) {
   const target = event.target as HTMLImageElement
   target.src = defaultImage    
}
