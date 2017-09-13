/* eslint-disable */
import test from 'ava'
import { render, shallow } from 'enzyme'
import { spy } from 'sinon'
import React from 'react'

import SimpleButton from './fixtures/SimpleButton'


test('renders one <button>', (t) => {
  const wrapper = shallow(<SimpleButton />)

  t.is(wrapper.find('button').length, 1)
})

test('renders with .button classes', (t) => {
  const wrapper = shallow(<SimpleButton />)

  t.is(wrapper.find('.button').length, 1)
})

test('rendered HTML', (t) => {
  const content = 'button'
  const button = (<SimpleButton content={content} />)
  const shallowWrapper = shallow(button)
  const cheerioWrapper = render(button)

  /**
   *
   * shallowWrapper.text()でもHTML取得できるが、あまり信用すべきでないと書いてあるので、`render`で
   * 得られたcheerioWrapper.text()で出力HTMLを確認する
   *
   * cf. https://github.com/airbnb/enzyme/blob/master/docs/api/ShallowWrapper/text.md
   *
   *
   * props.contentの取得でなぜ`shallowWrapper.prop('content')`ではないのか？
   * ↓
   * see https://github.com/airbnb/enzyme/blob/master/docs/api/ShallowWrapper/prop.md
   */
  t.is(cheerioWrapper.text(),
       `${shallowWrapper.instance().props.content} - ${shallowWrapper.state('count')}`)
})

test('state of count incremented via handleClick', (t) => {
  const handleClickSpy = spy()
  const wrapper = shallow(<SimpleButton handleClick={handleClickSpy}/>)
  const initialCount = wrapper.state('count')

  wrapper.find('button').simulate('click')

  t.true(handleClickSpy.calledOnce)
  t.is(wrapper.state('count'), initialCount + 1)
})
