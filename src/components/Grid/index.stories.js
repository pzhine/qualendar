import React from 'react'
import moment from 'moment'
import { StaticRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import Grid from './'
import { april2018 } from '../../../test/fixtures'

storiesOf('Grid', module)
  .addDecorator(story =>
    <StaticRouter>
      <div style={{ height: '100vh', background: '#ccc' }}>
        {story()}
      </div>
    </StaticRouter>
  )
  .add('april 2018', () =>
    <Grid date={moment('2018-04-01')} events={april2018} />
  )
  .add('may 2018', () => <Grid date={moment('2018-05-01')} events={[]} />)
  .add('june 2018', () => <Grid date={moment('2018-06-01')} events={[]} />)
  .add('current month', () => <Grid date={moment()} events={[]} />)
