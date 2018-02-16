import React from 'react'
import { storiesOf } from '@storybook/react'
import { StaticRouter } from 'react-router'
import DatePicker from './'
import { datePath } from '../../lib/dates'

const today = Date.now()

storiesOf('DatePicker', module)
  .addDecorator(story =>
    <StaticRouter location={`/m/${datePath(today)}`}>
      {story()}
    </StaticRouter>
  )
  .add('today', () => <DatePicker date={today} />)
