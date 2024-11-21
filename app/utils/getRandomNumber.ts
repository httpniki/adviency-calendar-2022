export default function getRandomNumber(min: number = 0, max: number) {
   const number = Math.floor(Math.random() * (max - min) + min)
   return number
}
