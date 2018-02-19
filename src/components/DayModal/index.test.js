import React from 'react'
import { mount } from 'enzyme'
import moment from 'moment'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import MockRouter from 'react-mock-router'
import DayModal from './'
import {
  april2018loadedState,
  april2018cleanState,
  april2018 as april2018events,
} from '../../../test/fixtures'

const DummyChild = () => <div className="dummy" />

const mockStore = configureStore([thunk])

const wrapper = ({ store, pathname }) =>
  mount(
    <MockRouter location={{ pathname }}>
      <Provider store={store || mockStore(april2018loadedState)}>
        <DayModal>
          <DummyChild />
        </DayModal>
      </Provider>
    </MockRouter>
  )

const day = moment({ year: 2018, month: 3, day: 24 }).valueOf()

it('should put date and events prop on child(ren)', () => {
  const component = wrapper({ pathname: '/m/2018/4/24' }).find('DummyChild')
  expect(moment(component.prop('date')).isSame(day, 'day')).toBeTruthy()
  expect(component.prop('events')).toEqual(april2018events[24])
})

it('should not render the child when loading month', () => {
  const wrapped = wrapper({
    store: mockStore(april2018cleanState),
    pathname: '/m/2018/4/24',
  })
  expect(wrapped.find('DummyChild').length).toBe(0)
})
