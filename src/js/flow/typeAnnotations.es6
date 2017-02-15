/* @flow */

function foo(x: number, y: number): number {
  return x * y
}
foo(10, 2)

/*
 * function fooErr(x: number, y: number): string {
 *   return x * y
 * }
 * fooErr(10, 2)
 */

const fooArrow: (x: string, y: number) => number = (x, y) => (
  x.length * y
)

fooArrow('hello', 10)
