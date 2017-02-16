/* @flow */
import React, { Component, Element } from 'react'

export default class Button extends Component {
  props: {
    content: string,
    handleClick: (e: Event) => void,
    children?: Element<*>,
  }
  state: ButtonState

  constructor(props: ButtonProps) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    const {
      content,
      handleClick,
      children,
    } = this.props

    return (
      <div>
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
        {children}
      </div>
    )
  }
}
