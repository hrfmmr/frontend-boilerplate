/* @flow */
export default function promiseFn(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('promise done')
    }, 1000)
  })
}
