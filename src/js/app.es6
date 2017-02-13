import React from 'react';
import { render } from 'react-dom'

const App = () => (
  <div>
    <button className="button button--red">Button</button>
  </div>
)

render(<App />, document.getElementById('root'))
