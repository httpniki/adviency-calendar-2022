export default function convertToDecimalNumber(number: number) {
   const parsedNumber = number.toLocaleString(undefined, { style: 'decimal' })

   return parsedNumber
}
