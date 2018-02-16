/* eslint-disable import/first */
import mockResponsive from '../../../test/mockResponsive'
import React from 'react'
import MockRouter from 'react-mock-router'
import { mount } from 'enzyme'
import moment from 'moment'
import GridDay from './'
import fixtures from '../../../test/fixtures'

const today = moment().valueOf()

const someDay = moment({
  year: 2018,
  month: 3,
  day: 10,
}).valueOf()

const wrapper = ({ events, date, push, width }) => {
  mockResponsive.width = width || 1280
  return mount(
    <MockRouter push={push}>
      <GridDay events={events} date={date} />
    </MockRouter>
  )
    .find('.gridDay')
    .first()
}

it('should render the date', () => {
  const params = { date: someDay }
  expect(wrapper(params).find('.date').text()).toEqual('10')
})

it('should redirect to new event on click when no events', () => {
  const push = jest.fn()
  const params = { date: someDay, push }
  wrapper(params).find('a').simulate('click', { button: 0 })
  expect(push).toBeCalledWith('/m/2018/4/10/new')
})

it('should render the today highlight for today', () => {
  const params = { date: today }
  expect(wrapper(params).find('.isToday').length).toBe(1)
})

it('should not render the today highlight for not today', () => {
  const params = { date: someDay }
  expect(wrapper(params).find('.isToday').length).toBe(0)
})

it('should render some events', () => {
  const params = {
    date: someDay,
    events: [fixtures.events.allDay, fixtures.events.specificDuration],
  }
  expect(wrapper(params).find('GridEvent').length).toBe(2)
})

it('should redirect to day view on click when has events', () => {
  const push = jest.fn()
  const params = {
    date: someDay,
    events: [fixtures.events.allDay, fixtures.events.specificDuration],
    push,
  }
  wrapper(params).find('a').simulate('click', { button: 0 })
  expect(push).toBeCalledWith('/m/2018/4/10')
})

it('should not render GridEvents on mobile', () => {
  const params = {
    date: someDay,
    events: [fixtures.events.allDay, fixtures.events.specificDuration],
    width: 375,
  }
  expect(wrapper(params).find('GridEvent').length).toBe(0)
})

it('should not render "hasEvents" class with no events', () => {
  const params = { date: someDay }
  expect(wrapper(params).find('.hasEvents').length).toBe(0)
})

it('should render "hasEvents" class with events', () => {
  const params = {
    date: someDay,
    events: [fixtures.events.allDay, fixtures.events.specificDuration],
  }
  expect(wrapper(params).find('.hasEvents').length).toBe(1)
})
