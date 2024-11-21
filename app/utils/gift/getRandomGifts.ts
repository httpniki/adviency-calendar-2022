import fs from 'fs/promises'
import path from 'path'
import type { Gift } from '~/types/gifts'

export default async function getRandomGifts(): Promise<Gift[]> {
   const gifts = await fs.readFile(path.join('public', 'gifts.json'), 'utf-8')

   return JSON.parse(gifts) as Gift[]
} 
