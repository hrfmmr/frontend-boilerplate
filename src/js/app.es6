/* @flow */
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import Button from './components/Button'

const App = () => (
  <div>
    <Button content={'button1'} handleClick={() => {
      console.log('clicked1')
    }}/>
    <Button content={'button2'} handleClick={() => {
      console.log('clicked2')
    }}>
      button2 children
    </Button>
  </div>
)

render(<App />, document.getElementById('root'))

//////////////////////////////////////////////////////////////////
const wait = (n) => (
  new Promise((done) => setTimeout(() => done(n), n))
)

const main = async () => {
  await wait(3000)
  console.log('await done')
}

wait(2000).then((n) => console.log(`promise normaly done: ${n}`))

main()

