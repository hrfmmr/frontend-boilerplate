import React, { Component } from 'react'
import Button from '../components/Button'

type Props = {
  count: number,
  handleIncrement: () => void,
  handleIncrementBy: () => void,
}

export default class Counter extends Component {
  props: Props

  render() {
    const {
      count,
      handleIncrement,
      handleIncrementBy,
    } = this.props

    return (
      <div>
        counter: {count}
        <Button content={'++'} handleClick={handleIncrement} />
        <Button content={'+10'} handleClick={handleIncrementBy} />
      </div>
    )
  }
}
