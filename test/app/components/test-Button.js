import test from 'ava'
import { render, shallow } from 'enzyme'
import 'jsdom-global/register'
import React from 'react'
import Button from 'js/components/Button'

test('Button is single <button> element', (t) => {
  const wrapper = shallow(<Button />)

  t.is(wrapper.find('button').length, 1)
})

test('Button has .button, .button--red classes', (t) => {
  const wrapper = shallow(<Button />)

  t.is(wrapper.find('.button').length, 1)
  t.is(wrapper.find('.button--red').length, 1)
})

test('Button renders its props.content as children', (t) => {
  const content = 'foo'
  const wrapper = render(<Button content={content} />)

  t.is(wrapper.text(), content)
})
