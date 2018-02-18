import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import GridEvent from './'
import fixtures from '../../../test/fixtures'

const wrapper = props => shallow(<GridEvent {...props} />)

it('renders specific duration event', () => {
  expect(
    wrapper({ event: fixtures.events.specificDuration })
      .find('.gridEvent')
      .find('span')
      .text()
  ).toEqual('Vuelo a Paris')
})

it('renders an all day event', () => {
  expect(
    wrapper({ event: fixtures.events.allDay })
      .find('.isAllDay')
      .find('span')
      .text()
  ).toEqual("Dad's birthday")
})

it('renders an all day event that spans multiple days', () => {
  expect(
    wrapper({ event: fixtures.events.allDay2 })
      .find('.isAllDay.spansMultiple')
      .find('span')
      .text()
  ).toEqual('Return videotapes')
})

it('renders className from props', () => {
  expect(
    wrapper({ event: fixtures.events.allDay, className: 'foo' }).is('.foo')
  ).toBeTruthy()
})
