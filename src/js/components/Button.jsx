/* @flow */
import React from 'react'


type Props = {
    content: string,
    handleClick: (e: Event) => void,
}

export default function Button(props: Props) {
  const { content, handleClick } = props

  return (
    <button className="button button--red" onClick={handleClick}>
      {content}
    </button>
  )
}
