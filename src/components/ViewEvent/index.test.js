import React from 'react'
import { mount } from 'enzyme'
import MockRouter from 'react-mock-router'
import ViewEvent from './'
import fixtures from '../../../test/fixtures'

const wrapper = ({ event, push, pathname }) => {
  const location = { pathname: pathname || '' }
  return mount(
    <MockRouter push={push} location={location}>
      <ViewEvent event={event} />
    </MockRouter>
  )
    .find('.viewEvent')
    .first()
}

const { specificDuration, allDay, spanDays } = fixtures.events

it('should render the time', () => {
  expect(
    wrapper({ event: specificDuration }).find('.time').first().text()
  ).toEqual('6:30 am to 9:15 am')
})

it('should render the time and ends at date if we span days', () => {
  expect(wrapper({ event: spanDays }).find('.time').first().text()).toEqual(
    '8:00 pm to Apr 11 at 4:00 am'
  )
})

it('should render "All day" for all day event', () => {
  expect(wrapper({ event: allDay }).find('.time').first().text()).toEqual(
    'All day'
  )
})

it('should render the title', () => {
  expect(
    wrapper({ event: specificDuration }).find('.title').first().text()
  ).toEqual('Vuelo a Paris')
})

it('should render the location', () => {
  expect(
    wrapper({ event: specificDuration }).find('.location').first().text()
  ).toEqual('Barcelona BCN')
})

it('should redirect to edit on edit click', () => {
  const push = jest.fn()
  wrapper({ event: allDay, pathname: '/m/2018/4/13', push })
    .find('.edit')
    .first()
    .simulate('click', { button: 0 })
  expect(push).toBeCalledWith('/m/2018/4/13/2/edit')
})
