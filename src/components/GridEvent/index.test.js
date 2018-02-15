import React from 'react'
import { shallow } from 'enzyme'
import GridEvent from './'
import fixtures from '../../../test/fixtures'

const wrapper = evt => shallow(<GridEvent event={evt} />)

it('renders specific duration event', () => {
  expect(
    wrapper(fixtures.events.specificDuration)
      .find('.gridEvent')
      .find('span')
      .text()
  ).toEqual('Vuelo a Paris')
})

it('renders an all day event', () => {
  expect(
    wrapper(fixtures.events.allDay).find('.isAllDay').find('span').text()
  ).toEqual("Dad's birthday")
})
