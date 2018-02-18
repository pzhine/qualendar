import React from 'react'
import { storiesOf } from '@storybook/react'
import { StaticRouter } from 'react-router'
import GridHead from './'

const today = Date.now()

storiesOf('GridHead', module)
  .addDecorator(story =>
    <StaticRouter>
      {story()}
    </StaticRouter>
  )
  .add('current month', () => <GridHead date={today} />)
