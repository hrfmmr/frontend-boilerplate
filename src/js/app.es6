import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <div>
    <button className="button button--red">Button</button>
  </div>
)

render(<App />, document.getElementById('root'))

//////////////////////////////////////////////////////////////////
const wait = (n) => {
  return new Promise((done) => setTimeout(() => done(n), n));
};

const main = async () => {
  await wait(3000);
  console.log('await done');
};

wait(2000).then((n) => console.log(`promise normaly done: ${n}`));

main();

