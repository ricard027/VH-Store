export function formatNumber(number) {
  let numberString = number.toString()

  let formattedNumber = numberString.slice(0, 2) + ',' + numberString.slice(2)

  return formattedNumber
}
