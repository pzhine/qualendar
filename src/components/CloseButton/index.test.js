import React from 'react'
import { mount } from 'enzyme'
import MockRouter from 'react-mock-router'
import CloseButton from './'

const wrapper = ({ push, pathname }) => {
  const location = { pathname: pathname || '' }
  return mount(
    <MockRouter push={push} location={location}>
      <CloseButton />
    </MockRouter>
  )
    .find('.closeButton')
    .first()
}

it('should redirect to month view on click', () => {
  const push = jest.fn()
  const params = { push, pathname: '/m/2018/4/10/new' }
  wrapper(params).simulate('click', { button: 0 })
  expect(push).toBeCalledWith('/m/2018/4')
})
