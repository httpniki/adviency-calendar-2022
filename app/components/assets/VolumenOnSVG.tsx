interface Props {
   strokeColor?: string
   className?: string
   id?: string
}

export default function VolumeOnSVG({ strokeColor='#000000', className }: Props) {
   return(
      <svg className={className} width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke={strokeColor} fill="none" strokeLinecap="round" strokeLinejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
         <path d="M15 8a5 5 0 0 1 0 8" />
         <path d="M17.7 5a9 9 0 0 1 0 14" />
         <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
      </svg>
   )
}
