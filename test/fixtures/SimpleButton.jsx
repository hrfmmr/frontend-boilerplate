/* @flow */
import React, { Component } from 'react'

type Props = {
  content: string,
  handleClick: () => void
}

type State = {
  count: number
}

export default class SimpleButton extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    const { content, handleClick } = this.props

    return (
      <button className="button" onClick={() => {
        handleClick()
        this.setState({
          count: this.state.count + 1
        })
      }}>
        {content} - {this.state.count}
      </button>
    )
  }
}
