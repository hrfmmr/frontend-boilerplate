/* @flow */
import React from 'react'

import Button from 'src/components/Button'


type Props = {
  count: number,
  handleIncrement: () => void,
  handleIncrementBy: () => void,
}


export default function Counter(props: Props) {
  const {
    count,
    handleIncrement,
    handleIncrementBy,
  } = props

  return (
    <div>
      counter: {count}
      <Button content={'++'} handleClick={handleIncrement} />
      <Button content={'+10'} handleClick={handleIncrementBy} />
    </div>
  )
}
