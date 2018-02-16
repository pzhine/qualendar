/* eslint-disable import/first */
import mockResponsive from '../../../test/mockResponsive'
import React from 'react'
import { mount } from 'enzyme'
import GridColumnHead from './'

const wrapper = ({ day, width }) => {
  mockResponsive.width = width || 1280
  return mount(<GridColumnHead day={day} />)
}

it('should render the correct day', () => {
  expect(wrapper({ day: 3 }).text()).toEqual('Wed')
})

it('should render single letter day on mobile', () => {
  expect(wrapper({ day: 3, width: 375 }).text()).toEqual('W')
})
