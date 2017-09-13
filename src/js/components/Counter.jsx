/* @flow */
import React from 'react'

import Button from 'src/components/Button'


type State = {
  count: number,
}

export default class Counter extends React.Component {
  onIncrement: () => void
  onIncrementBy: () => void

  state: State

  constructor(args: any[]) {
    super(args)
    this.onIncrement = this.onIncrement.bind(this)
    this.onIncrementBy = this.onIncrementBy.bind(this, 10)
    this.state = {
      count: 0,
    }
  }

  onIncrement() {
    this.setState({ count: this.state.count + 1 })
  }

  onIncrementBy(count: number) {
    this.setState({ count: this.state.count + count })
  }

  render() {
    return (
      <div>
        counter: {this.state.count}
        <Button content={'++'} handleClick={this.onIncrement} />
        <Button content={'+10'} handleClick={this.onIncrementBy} />
      </div>
    )
  }
}
