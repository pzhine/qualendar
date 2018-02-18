/* eslint-disable import/first */
import mockResponsive from '../../../test/mockResponsive'
import React from 'react'
import { mount } from 'enzyme'
import moment from 'moment'
import MockRouter from 'react-mock-router'
import DatePicker from './'

const wrapper = ({ date, width, pathname }) => {
  mockResponsive.width = width || 1280
  const location = { pathname: pathname || '' }
  return mount(
    <MockRouter location={location}>
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

it('should render a Picker with the correct paths assigned', () => {
  const params = { date: someDay, pathname: '/m/2018/4/10/new' }
  const component = wrapper(params).find('Picker')
  expect(component.prop('nextPath')).toEqual('/m/2018/4/11/new')
  expect(component.prop('prevPath')).toEqual('/m/2018/4/9/new')
})
