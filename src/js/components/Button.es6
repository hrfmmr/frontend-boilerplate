/* @flow */
import React, { Component, Element } from 'react'

type Props = {
    content: string,
    handleClick: (e: Event) => void,
}

type State = {
  count: number
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
    const {
      content,
      handleClick,
    } = this.props

    return (
      <button
        className="button button--red"
        onClick={(e) => {
        handleClick(e)

        // TEST CODE
        // should not update own state in child component itself
        this.setState({
          count: this.state.count + 1
        })
      }}>
        {`${content} - ${this.state.count}`}
      </button>
    )
  }
}
