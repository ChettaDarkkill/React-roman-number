import React from 'react'
import { shallow } from 'enzyme'
import App from './App'


it('Should contain one #myInput ', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('#myInput')).toHaveLength(1)
})

it('Should contain one #mySubmit ', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('#mySubmit')).toHaveLength(1)
})

it('Should contain one #myResult ', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('#myResult')).toHaveLength(1)
})