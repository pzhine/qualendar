import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import EnumInput from './'

const mockStore = configureStore()
let currentStore
const cleanState = { forms: { fields: { 'test.enum1': null } } }
const editedState = { forms: { fields: { 'test.enum1': true } } }
const editedState2 = { forms: { fields: { 'test.enum1': false } } }
const wrapper = state => {
  currentStore = (state && mockStore(state)) || mockStore(cleanState)
  return mount(
    <EnumInput
      store={currentStore}
      field={'test.enum1'}
      options={[{ name: 'Yes', value: true }, { name: 'No', value: false }]}
    />
  )
}

it('should render the enum options', () => {
  const options = wrapper().find('.option')
  expect(options.length).toBe(2)
  expect(options.at(0).text()).toEqual('Yes')
  expect(options.at(1).text()).toEqual('No')
})

it('should start with the correct options, based on store', () => {
  expect(wrapper(cleanState).find('.option.isActive').length).toBe(0)
  expect(wrapper(editedState).find('.option.isActive').text()).toEqual('Yes')
  expect(wrapper(editedState2).find('.option.isActive').text()).toEqual('No')
})

it('should update the store on change', () => {
  wrapper().find('.option').at(0).simulate('click', { button: 0 })
  expect(currentStore.getActions()).toEqual([
    {
      payload: {
        field: 'test.enum1',
        value: true,
      },
      type: 'FORM_FIELD_CHANGED',
    },
  ])
})
