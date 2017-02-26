import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Counter from 'js/components/Counter'
import Button from 'js/components/Button'

test('Counter contains two <Button />', (t) => {
  const wrapper = shallow(<Counter />)

  t.is(wrapper.find(Button).length, 2)
})
