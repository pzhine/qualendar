import React from 'react'
import { mount } from 'enzyme'
import moment from 'moment'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import MockRouter from 'react-mock-router'
import ViewMonth from './'
import {
  april2018loadedState,
  april2018cleanState,
  april2018 as april2018events,
} from '../../../test/fixtures'

const DummyChild = () => <div className="dummy" />

const mockStore = configureStore()

const wrapper = ({ store, pathname }) =>
  mount(
    <MockRouter location={{ pathname }}>
      <Provider store={store || mockStore(april2018loadedState)}>
        <ViewMonth>
          <DummyChild />
        </ViewMonth>
      </Provider>
    </MockRouter>
  )

const april2018 = moment({ year: 2018, month: 3 }).valueOf()
const may2018 = moment({ year: 2018, month: 4 }).valueOf()

it('should dispatch a fetch action when route changes to new month', () => {
  const store = mockStore(april2018loadedState)
  const wrapped = wrapper({ store, pathname: '/m/2018/4' })
  wrapped.setProps({ location: { pathname: '/m/2018/5' } })
  expect(store.getActions()).toEqual([
    {
      payload: {
        range: 'm',
        date: may2018,
      },
      type: 'FETCH_EVENTS',
    },
  ])
})

it('should put date and events prop on child(ren)', () => {
  const component = wrapper({ pathname: '/m/2018/4' }).find('DummyChild')
  expect(moment(component.prop('date')).isSame(april2018, 'month')).toBeTruthy()
  expect(component.prop('events')).toEqual(april2018events)
})

it('should not dispatch a fetch action when the month is in state', () => {
  const store = mockStore(april2018loadedState)
  wrapper({ store, pathname: '/m/2018/4' })
  expect(store.getActions().length).toBe(0)
})

it('should render a Loader component, not the child, when loading month', () => {
  const wrapped = wrapper({
    store: mockStore(april2018cleanState),
    pathname: '/m/2018/3',
  })
  expect(wrapped.find('DummyChild').length).toBe(0)
  expect(wrapped.find('Loader').length).toBe(1)
})

it('should hold date and events props on children until done fetching', () => {
  const store = mockStore(april2018loadedState)
  const wrapped = wrapper({ store, pathname: '/m/2018/4' })
  const component = wrapped.find('DummyChild')
  wrapped.setProps({ location: { pathname: '/m/2018/5' } })
  expect(moment(component.prop('date')).isSame(april2018, 'month')).toBeTruthy()
  expect(component.prop('events')).toEqual(april2018events)
})
