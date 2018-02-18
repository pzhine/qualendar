import React from 'react'
import { mount } from 'enzyme'
import moment from 'moment'
import MockRouter from 'react-mock-router'
import GridHead from './'

const wrapper = ({ date }) =>
  mount(
    <MockRouter location={{ pathname: '' }}>
      <GridHead date={date} />
    </MockRouter>
  )
    .find('.gridHead')
    .first()

const someMonth = moment({
  year: 2018,
  month: 3,
}).valueOf()

it('should render the month and year', () => {
  expect(wrapper({ date: someMonth }).find('.month').text()).toEqual(
    'April 2018'
  )
})

it('should render a NewEventButton', () => {
  expect(wrapper({ date: someMonth }).find('NewEventButton').length).toBe(1)
})

it('should render a Picker with the correct paths assigned', () => {
  const component = wrapper({ date: someMonth }).find('Picker')
  expect(component.prop('nextPath')).toEqual('/m/2018/5')
  expect(component.prop('prevPath')).toEqual('/m/2018/3')
})
