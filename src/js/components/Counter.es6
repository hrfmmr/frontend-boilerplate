import React, { Component } from 'react'
import Button from '../components/Button'

type Props = {
  count: number,
  handleIncrement: () => void,
  handleDecrement: () => void,
}

export default class Counter extends Component {
  props: Props

  render() {
    const {
      count,
      handleIncrement,
      handleDecrement,
    } = this.props

    return (
      <div>
        counter: {count}
        <Button content={'++'} handleClick={handleIncrement} />
        <Button content={'--'} handleClick={handleDecrement} />
      </div>
    )
  }
}
