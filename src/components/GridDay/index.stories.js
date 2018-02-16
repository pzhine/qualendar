import React from 'react'
import { storiesOf } from '@storybook/react'
import moment from 'moment'
import { MemoryRouter } from 'react-router'
import fixtures from '../../../test/fixtures'
import GridDay from './'

const today = moment().valueOf()
const tomorrow = moment().add(1, 'days').valueOf()
const oneEvent = [fixtures.events.specificDuration]
const oneAllDayEvent = [fixtures.events.allDay]
const multipleEvents = [
  fixtures.events.allDay,
  fixtures.events.allDay2,
  fixtures.events.specificDuration,
  fixtures.events.specificDuration2,
]

storiesOf('GridDay', module)
  .addDecorator(story =>
    <MemoryRouter>
      <div
        style={{
          width: 175,
          height: 175,
          border: '1px solid #ccc',
          margin: 24,
        }}
      >
        {story()}
      </div>
    </MemoryRouter>
  )
  .add('tomorrow', () => <GridDay date={tomorrow} />)
  .add('today', () => <GridDay date={today} />)
  .add('one event', () => <GridDay date={tomorrow} events={oneEvent} />)
  .add('one all day event', () =>
    <GridDay date={tomorrow} events={oneAllDayEvent} />
  )
  .add('multiple events', () =>
    <GridDay date={tomorrow} events={multipleEvents} />
  )
  .add('multiple events today', () =>
    <GridDay date={today} events={multipleEvents} />
  )
