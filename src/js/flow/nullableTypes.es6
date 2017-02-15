/* @flow */

function foo(x) {
  return x.length
}

/**
 * Property cannot be accessed on possibly null value
 *
 * const total = foo('Hello') + foo(null)
 */

function nullSafeFoo(x) {
  if(x !== null) {
    return x.length
  }

  return 0
}
console.log(`${nullSafeFoo('Hello')} + ${nullSafeFoo(null)}`)

/**
 * NOTE It is important to note that we used == instead of === to do a null check.
 * This ensures that we also check for undefined, which is considered part of a maybe type.
 * Using === null instead would require yet another === undefined to cover all cases.
 *
 * https://flowtype.org/docs/nullable-types.html
 *
 */
function nullableFoo(x: ?string) {
  if(x != null) {
    return x.length
  }

  return 0
}
console.log(`${nullableFoo('Hello')} + ${nullableFoo(null)}`)
