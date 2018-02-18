import React from 'react'
import { mount } from 'enzyme'
import MockRouter from 'react-mock-router'
import moment from 'moment'
import Grid from './'
import fixtures, { april2018 } from '../../../test/fixtures'

const wrapper = ({ date, events }) =>
  mount(
    <MockRouter location={{ pathname: '' }}>
      <Grid date={date} events={events} />
    </MockRouter>
  )
    .find('.grid')
    .first()

const params = { date: moment('2018-04-01').valueOf(), events: april2018 }

it('should render 7 GridColumnHead components', () => {
  expect(wrapper(params).find('GridColumnHead').length).toBe(7)
})

it('should render 5 rows of 7 GridDay components', () => {
  expect(wrapper(params).find('.row').length).toBe(5)
  expect(wrapper(params).find('.row').first().find('GridDay').length).toBe(7)
  expect(wrapper(params).find('GridDay').length).toBe(35)
})

it('should render first day as apr 1, last as may 5', () => {
  const wrapped = wrapper(params)
  const firstDate = wrapped.find('GridDay').first().prop('date')
  const lastDate = wrapped.find('GridDay').last().prop('date')
  expect(moment(firstDate).isSame('2018-04-01', 'day')).toBeTruthy()
  expect(moment(lastDate).isSame('2018-05-05', 'day')).toBeTruthy()
})

it('should render the correct events on a given date', () => {
  expect(wrapper(params).find('GridDay').at(9).prop('events')).toEqual([
    fixtures.events.specificDuration,
    fixtures.events.spanDays,
  ])
})

it('should render the multi-day event correctly', () => {
  const wrapped = wrapper(params)
  expect(wrapped.find('GridDay').at(23).prop('events')).toEqual([
    fixtures.events.allDay2,
  ])
  expect(wrapped.find('GridDay').at(24).prop('events')).toEqual([
    { ...fixtures.events.allDay2, startedOn: moment('2018-04-24').valueOf },
  ])
  expect(wrapped.find('GridDay').at(25).prop('events')).toEqual([
    { ...fixtures.events.allDay2, startedOn: moment('2018-04-24').valueOf },
  ])
})

it('should not set "offMonth" prop on days in month', () => {
  expect(wrapper(params).find('GridDay').at(14).prop('isOffMonth')).toBeFalsy()
})

it('should set "offMonth" prop on days before and after month', () => {
  expect(wrapper(params).find('GridDay').at(32).prop('isOffMonth')).toBeTruthy()
})
