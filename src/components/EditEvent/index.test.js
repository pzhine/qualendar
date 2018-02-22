import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import MockRouter from 'react-mock-router'
import thunk from 'redux-thunk'
import EditEvent from './'
import fixtures from '../../../test/fixtures'

const { specificDuration, specificDuration3 } = fixtures.events
const { newEvent, editEvent, editEvent3 } = fixtures.states

const mockStore = configureStore([thunk])
let currentStore

const wrapper = ({ event, state }) => {
  currentStore = (state && mockStore(state)) || mockStore(newEvent)
  return mount(
    <Provider store={currentStore}>
      <MockRouter location={{ pathname: '' }}>
        <EditEvent event={event} />
      </MockRouter>
    </Provider>
  )
}

const existing = { event: specificDuration }
const noid = { event: { ...specificDuration, id: null } }

it('should render the DatePicker with the right date', () => {
  const component = wrapper(existing).find('DatePicker')
  expect(component.length).toBe(1)
  expect(component.prop('date')).toEqual(specificDuration.startsAt)
})

it('should render a CloseButton', () => {
  expect(wrapper(existing).find('CloseButton').length).toBe(1)
})

it('should render "New Event" subtitle for no event id', () => {
  expect(wrapper(noid).find('.subtitle').text()).toEqual('New Event')
})

it('should render "Modify Event" subtitle for existing event', () => {
  expect(wrapper(existing).find('.subtitle').text()).toEqual('Modify Event')
})

it('should dispatch save action with event data attached', () => {
  wrapper({ event: specificDuration3, state: editEvent3 })
    .find('.save button')
    .simulate('click')
  expect(currentStore.getActions()).toEqual([
    {
      payload: specificDuration3,
      type: 'SAVE_EVENT',
    },
  ])
})

it('should not render a delete button for new event', () => {
  expect(wrapper(noid).find('button.delete').length).toBe(0)
})

it('should dispatch delete action with id', () => {
  wrapper({ event: specificDuration, state: editEvent })
    .find('.delete button')
    .simulate('click')
  expect(currentStore.getActions()).toEqual([
    {
      payload: specificDuration,
      type: 'DELETE_EVENT',
    },
  ])
})
