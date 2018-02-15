import React from 'react'
import { storiesOf } from '@storybook/react'
import fixtures from '../../../test/fixtures'
import GridEvent from './'

storiesOf('GridEvent', module)
  .add('specific duration', () =>
    <GridEvent event={fixtures.events.specificDuration} />
  )
  .add('all day', () => <GridEvent event={fixtures.events.allDay} />)
