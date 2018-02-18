import React from 'react'
import { mount } from 'enzyme'
import MockRouter from 'react-mock-router'
import Picker from './'

const wrapper = ({ push, nextPath, prevPath }) => {
  const location = { pathname: '' }
  return mount(
    <MockRouter push={push} location={location}>
      <Picker nextPath={nextPath} prevPath={prevPath} />
    </MockRouter>
  )
    .find('.picker')
    .first()
}

it('should redirect to nextPath on next', () => {
  const push = jest.fn()
  const params = { push, nextPath: '/next', prevPath: '/prev' }
  wrapper(params).find('.next').first().simulate('click', { button: 0 })
  expect(push).toBeCalledWith('/next')
})

it('should redirect to prevPath on prev', () => {
  const push = jest.fn()
  const params = { push, nextPath: '/next', prevPath: '/prev' }
  wrapper(params).find('.prev').first().simulate('click', { button: 0 })
  expect(push).toBeCalledWith('/prev')
})
