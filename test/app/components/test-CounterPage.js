import test from 'ava'
import { mount, shallow } from 'enzyme'
import 'jsdom-global/register'
import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import CounterPage from 'js/pages/CounterPage'
import { INCREMENT_COUNTER } from 'js/constants/ActionTypes'

test('CounterPage mounted with `connect`', (t) => {
  const mockStore = configureMockStore([])
  const store = mockStore({})
  const wrapper = shallow(
    <Provider store={store}>
      <CounterPage />
    </Provider>
  )

  t.is(wrapper.text(), '<Connect(Counter) />')
})

test('CounterPage increment action', (t) => {
  const mockStore = configureMockStore([])
  const store = mockStore({})
  const wrapper = mount(
    <Provider store={store}>
      <CounterPage />
    </Provider>
  )

  t.is(store.getActions().length, 0)

  const buttons = wrapper.find('button')

  t.is(buttons.length, 2)

  buttons.first().simulate('click')
  t.is(store.getActions().length, 1)

  const dispatched = store.getActions()[0]
  const action = {
    type: INCREMENT_COUNTER
  }

  /**
   * ↓ Cannot be 'strict equal'...
   */
  // t.is(store.getActions()[0], action)

  t.is(dispatched.type, action.type)

  t.pass()
})
