// from: https://github.com/contra/react-responsive/issues/63
const mockWindow = { width: 1280, height: 800 }

jest.mock('react-responsive', () => {
  const MediaQuery = require.requireActual('react-responsive').default
  const React = require('react')
  return props =>
    React.createElement(MediaQuery, {
      ...props,
      values: { width: mockWindow.width, height: mockWindow.height },
    })
})

export default mockWindow
