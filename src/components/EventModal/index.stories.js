import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { StaticRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import { april2018loadedState } from '../../../test/fixtures'
import EventModal from './'
import EditEvent from '../EditEvent'

const mockStore = configureStore()

storiesOf('EventModal', module)
  .addDecorator(story =>
    <div style={{ height: '100vh', background: '#ccc' }}>
      {story()}
    </div>
  )
  .add('edit event', () =>
    <StaticRouter location={'/m/2018/4/13/2/edit'}>
      <Provider store={mockStore(april2018loadedState)}>
        <EventModal>
          <EditEvent />
        </EventModal>
      </Provider>
    </StaticRouter>
  )
