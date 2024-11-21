import type { Config } from 'tailwindcss'

export default {
   content: ['./app/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         screens:  {
            'default': '1360px'
         },
         fontFamily: {
            'christmas': ['Rubik Gemstones', 'cursive', 'Roboto', 'system-ui']
         }
      },
   },
   plugins: [],
} satisfies Config

