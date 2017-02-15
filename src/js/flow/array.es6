/* @flow */

function foo(numbers: Array<number>) {
  let t = 0

  for(const n of numbers) {
    t += n
  }

  return t
}

/**
 *
 * string. This type is incompatible with
 *
 * foo([1, 2, 'Hello'])
 */

foo([1, 2, 3])
