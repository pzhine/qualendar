import React from 'react'
import MockRouter from 'react-mock-router'
import { mount } from 'enzyme'
import moment from 'moment'
import NewEventButton from './'
import { datePath } from '../../lib/dates'

const someDay = moment({
  year: 2016,
  month: 3,
  day: 10,
}).valueOf()

const wrapper = ({ date, push }) =>
  mount(
    <MockRouter push={push} location={{ pathname: '/m/2018/4' }}>
      <NewEventButton date={date} />
    </MockRouter>
  )
    .find('.newEventButton')
    .first()

it('should redirect to new event for today when no date', () => {
  const push = jest.fn()
  wrapper({ push }).find('a').simulate('click', { button: 0 })
  expect(push).toBeCalledWith(`/m/${datePath(Date.now())}/new`)
})

it('should redirect to new event on specified date', () => {
  const push = jest.fn()
  wrapper({ push, date: someDay }).find('a').simulate('click', { button: 0 })
  expect(push).toBeCalledWith(`/m/2016/4/10/new`)
})
