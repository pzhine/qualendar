import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { StaticRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import { april2018loadedState } from '../../../test/fixtures'
import DayModal from './'
import ViewDay from '../ViewDay'

const mockStore = configureStore()

storiesOf('DayModal', module)
  .addDecorator(story =>
    <StaticRouter location={'/m/2018/4/24'}>
      <div style={{ height: '100vh', background: '#ccc' }}>
        {story()}
      </div>
    </StaticRouter>
  )
  .add('april 24 2018', () =>
    <Provider store={mockStore(april2018loadedState)}>
      <DayModal>
        <ViewDay />
      </DayModal>
    </Provider>
  )
