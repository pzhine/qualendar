import React from 'react'
import { StaticRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import moment from 'moment'
import NewEventButton from './'
import { datePath } from '../../lib/dates'

const someDay = moment({
  year: 2018,
  month: 3,
  day: 10,
}).valueOf()

storiesOf('NewEventButton', module)
  .addDecorator(story =>
    <StaticRouter location={`/m/${datePath(Date.now())}`}>
      {story()}
    </StaticRouter>
  )
  .add('today', () => <NewEventButton />)
  .add('specific day', () => <NewEventButton date={someDay} />)
