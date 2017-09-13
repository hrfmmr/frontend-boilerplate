/* @flow */
import React from 'react'
import { render } from 'react-dom'

import Button from 'src/components/Button'


const App = () => (
  <div>
    <Button
      content={'button'}
      handleClick={() => {
        console.log('clicked')
      }}
    />
  </div>
)

render(<App />, document.getElementById('root'))
