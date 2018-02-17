import React from 'react'
import { mount } from 'enzyme'
import MockRouter from 'react-mock-router'
import moment from 'moment'
import ViewDay from './'
import fixtures from '../../../test/fixtures'

const wrapper = ({ date, events }) =>
  mount(
    <MockRouter location={{ pathname: '' }}>
      <ViewDay date={date} events={events} />
    </MockRouter>
  )

const someDay = moment({
  year: 2016,
  month: 3,
  day: 10,
}).valueOf()

const events = [
  fixtures.events.specificDuration,
  fixtures.events.allDay,
  fixtures.events.spanDays,
]

const params = { date: someDay, events }

it('should render the DatePicker with the right date', () => {
  expect(wrapper(params).find('DatePicker').length).toBe(1)
  expect(wrapper(params).find('DatePicker').prop('date')).toEqual(someDay)
})

it('should render the NewEventButton with the right date', () => {
  expect(wrapper(params).find('NewEventButton').length).toBe(1)
  expect(wrapper(params).find('NewEventButton').prop('date')).toEqual(someDay)
})

it('should render 3 ViewEvents', () => {
  expect(wrapper(params).find('ViewEvent').length).toBe(3)
})

it('should render a CloseButton', () => {
  expect(wrapper(params).find('CloseButton').length).toBe(1)
})
