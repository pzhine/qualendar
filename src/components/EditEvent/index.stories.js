import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { StaticRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import realStore from '../../redux/configureStore'
import fixtures from '../../../test/fixtures'
import EditEvent from './'

const mockStore = configureStore()

storiesOf('EditEvent', module)
  .addDecorator(story =>
    <StaticRouter>
      {story()}
    </StaticRouter>
  )
  .add('edit: specific duration', () =>
    <Provider store={mockStore(fixtures.states.editEvent)}>
      <EditEvent event={fixtures.events.specificDuration} />
    </Provider>
  )
  .add('edit: all day', () =>
    <Provider store={mockStore(fixtures.states.editAllDayEvent)}>
      <EditEvent event={fixtures.events.allDay} />
    </Provider>
  )
  .add('new event', () =>
    <Provider store={realStore}>
      <EditEvent event={fixtures.events.newEvent} />
    </Provider>
  )
