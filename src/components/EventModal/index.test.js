import React from 'react'
import { mount } from 'enzyme'
import moment from 'moment'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import MockRouter from 'react-mock-router'
import EventModal from './'
import fixtures, { april2018loadedState } from '../../../test/fixtures'

const DummyChild = () => <div className="dummy" />

const mockStore = configureStore([thunk])

const wrapper = ({ store, pathname }) =>
  mount(
    <MockRouter location={{ pathname }}>
      <Provider store={store || mockStore(april2018loadedState)}>
        <EventModal>
          <DummyChild />
        </EventModal>
      </Provider>
    </MockRouter>
  )

const editParams = {
  pathname: '/m/2018/4/24/4/edit',
}
const newParams = {
  pathname: '/m/2018/4/24/new',
}

const newEvent = {
  startsAt: moment({ year: 2018, month: 3, day: 24 }).valueOf(),
}

it('should put new event prop on child(ren)', () => {
  const component = wrapper(newParams).find('DummyChild')
  expect(component.prop('event')).toEqual(newEvent)
})

it('should put existing event prop on child(ren)', () => {
  const component = wrapper(editParams).find('DummyChild')
  expect(component.prop('event')).toEqual(fixtures.events.allDay2)
})

it('should load existing event into fields in state', () => {
  const store = mockStore(april2018loadedState)
  wrapper({ ...editParams, store })
  expect(store.getActions()).toEqual([
    {
      type: 'SET_FIELDS',
      payload: fixtures.states.editAllDayEvent2.forms.fields,
    },
  ])
})

it('should load new event into fields in state', () => {
  const store = mockStore(april2018loadedState)
  wrapper({ ...newParams, store })
  expect(store.getActions()).toEqual([
    {
      type: 'SET_FIELDS',
      payload: fixtures.states.newEvent.forms.fields,
    },
  ])
})
