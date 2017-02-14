/* @flow */

function foo(x: number, y: number): number {
  return x * y
}

const bar: (x: string, y: number) => number = (x, y) => (
  x.length * y
)

foo(10, 2)

bar('hello', 10)
