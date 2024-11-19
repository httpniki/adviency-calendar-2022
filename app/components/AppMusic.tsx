import { useEffect, useState } from 'react'
import VolumenOffSVG from './assets/VolumenOffSVG'
import VolumeOnSVG from './assets/VolumenOnSVG'
import jazzCoffeeMusic from '../../public/jazz-coffee-time.mp3'

export default function AppMusic() {
   const [playMusic, setPlayMusic] = useState(false) 

   useEffect(() => {
      const $audio = document.querySelector('audio') as HTMLAudioElement

      if(!playMusic) return

      $audio.loop = true
      $audio.volume = 0.4
      $audio.play()
   },[playMusic])

   return(
      <>
         <button 
            className='fixed right-5 top-3 z-[1000] h-max w-max'
            onClick={() => setPlayMusic(!playMusic)}
         >
            {(playMusic)      
               ? <VolumeOnSVG/>
               : <VolumenOffSVG/>
            }
         </button>

         <audio src={jazzCoffeeMusic} autoPlay muted={!playMusic}/>
      </>
   )
}
