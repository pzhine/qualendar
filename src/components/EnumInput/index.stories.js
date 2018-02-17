import React from 'react'
import { storiesOf } from '@storybook/react'
import store from '../../redux/configureStore'
import EnumInput from './'

storiesOf('EnumInput', module)
  .add('yes/no', () =>
    <EnumInput
      store={store}
      field={'test.enum1'}
      options={[{ name: 'Yes', value: true }, { name: 'No', value: false }]}
    />
  )
  .add('mins hours days', () =>
    <EnumInput
      store={store}
      field={'test.enum1'}
      options={[
        { name: 'mins', value: 'm' },
        { name: 'hours', value: 'h' },
        { name: 'days', value: 'd' },
      ]}
    />
  )
