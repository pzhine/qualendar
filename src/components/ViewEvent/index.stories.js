import React from 'react'
import { storiesOf } from '@storybook/react'
import { StaticRouter } from 'react-router'
import moment from 'moment'
import ViewEvent from './'
import { datePath } from '../../lib/dates'
import fixtures, { dates } from '../../../test/fixtures'

const someDay = moment(dates[0])

const { specificDuration, allDay, spanDays } = fixtures.events

storiesOf('ViewEvent', module)
  .addDecorator(story =>
    <StaticRouter location={`/m/${datePath(someDay)}`}>
      {story()}
    </StaticRouter>
  )
  .add('specific duration', () => <ViewEvent event={specificDuration} />)
  .add('all day', () => <ViewEvent event={allDay} />)
  .add('span days', () => <ViewEvent event={spanDays} />)
