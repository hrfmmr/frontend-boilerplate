/* @flow */
import React, { Component } from 'react'

type Props = {
    content: string,
    handleClick: (e: Event) => void,
}

export default class Button extends Component {
  props: Props

  render() {
    const { content, handleClick, } = this.props

    return (
      <button className="button button--red" onClick={handleClick}>
        {content}
      </button>
    )
  }
}
