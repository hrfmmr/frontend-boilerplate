/* @flow */
import React, { Component } from 'react'

type Props = {
    content: string,
    handleClick: (e: Event) => void,
}

type State = {
  count: number,
}

export default class Button extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    const { content, handleClick, } = this.props

    return (
      <button className="button button--red" onClick={handleClick}>
        {content}
      </button>
    )
  }
}
