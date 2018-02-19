import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { StaticRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import {
  april2018loadedState,
  april2018cleanState,
} from '../../../test/fixtures'
import ViewMonth from './'
import Grid from '../Grid'
import GridHead from '../GridHead'

const mockStore = configureStore()

storiesOf('ViewMonth', module)
  .addDecorator(story =>
    <StaticRouter location={'/m/2018/4'}>
      <div style={{ height: '100vh', background: '#ccc', display: 'flex' }}>
        {story()}
      </div>
    </StaticRouter>
  )
  .add('april 2018', () =>
    <Provider store={mockStore(april2018loadedState)}>
      <ViewMonth>
        <GridHead />
        <Grid />
      </ViewMonth>
    </Provider>
  )
  .add('still loading', () =>
    <Provider store={mockStore(april2018cleanState)}>
      <ViewMonth>
        <GridHead />
        <Grid />
      </ViewMonth>
    </Provider>
  )
