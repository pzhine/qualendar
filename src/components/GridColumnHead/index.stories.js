import React from 'react'
import { storiesOf } from '@storybook/react'
import GridColumnHead from './'

storiesOf('GridColumnHead', module)
  .addDecorator(story =>
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
  )
  .add('wednesday', () => <GridColumnHead day={3} />)
