import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import App from './containers/App'
import Token from './models/Token'
import initializeDatabase from './infra'
import Database from './infra/Database'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)


async function testDatabase() {
  await initializeDatabase()

  const token = new Token('friends.nico', 'glpt')
  console.log(token[token.constructor.keyPath])
  await Database.save(token)
  console.log(await Database.get(token))
  await Database.delete(token)
  console.log(await Database.get(token))
}

testDatabase()
