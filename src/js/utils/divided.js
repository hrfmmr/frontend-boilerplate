/* @flow */
export default function calculate(num: number): number {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new TypeError('Type of numeric is expected.')
  }

  return Math.floor(num / 2)
}
