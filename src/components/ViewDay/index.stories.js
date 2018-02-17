import React from 'react'
import { storiesOf } from '@storybook/react'
import { StaticRouter } from 'react-router'
import moment from 'moment'
import ViewDay from './'
import { datePath } from '../../lib/dates'
import fixtures from '../../../test/fixtures'

const someDay = moment({
  year: 2016,
  month: 3,
  day: 10,
}).valueOf()

const events = [
  fixtures.events.specificDuration,
  fixtures.events.allDay,
  fixtures.events.spanDays,
]

storiesOf('ViewDay', module)
  .addDecorator(story =>
    <StaticRouter location={`/m/${datePath(someDay)}`}>
      {story()}
    </StaticRouter>
  )
  .add('one event', () =>
    <ViewDay date={someDay} events={events.slice(0, 1)} />
  )
  .add('multiple events', () => <ViewDay date={someDay} events={events} />)
