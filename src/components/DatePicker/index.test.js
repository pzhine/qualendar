/* eslint-disable import/first */
import mockResponsive from '../../../test/mockResponsive'
import React from 'react'
import { mount } from 'enzyme'
import moment from 'moment'
import MockRouter from 'react-mock-router'
import DatePicker from './'

const wrapper = ({ date, width, push, pathname }) => {
  mockResponsive.width = width || 1280
  const location = { pathname: pathname || '' }
  return mount(
    <MockRouter push={push} location={location}>
      <DatePicker date={date} />
    </MockRouter>
  )
    .find('.datePicker')
    .first()
}

const someDay = moment({
  year: 2018,
  month: 3,
  day: 10,
}).valueOf()

it('should render the date', () => {
  expect(wrapper({ date: someDay }).find('.date').text()).toEqual(
    'Tuesday, April 10'
  )
})

it('should render short date on mobile', () => {
  expect(wrapper({ date: someDay, width: 375 }).find('.date').text()).toEqual(
    'Tue, Apr 10'
  )
})

it('should redirect to next date on next', () => {
  const push = jest.fn()
  const params = { date: someDay, push, pathname: '/m/2018/4/10/new' }
  wrapper(params).find('.next').first().simulate('click', { button: 0 })
  expect(push).toBeCalledWith('/m/2018/4/11/new')
})

it('should redirect to prev date on prev', () => {
  const push = jest.fn()
  const params = { date: someDay, push, pathname: '/m/2018/4/10/new' }
  wrapper(params).find('.prev').first().simulate('click', { button: 0 })
  expect(push).toBeCalledWith('/m/2018/4/9/new')
})
