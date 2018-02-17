import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import actions from '../../redux/forms/actions'
import styles from './styles.scss'

const TextInput = ({
  fields,
  field,
  name,
  fieldChanged,
  className,
  type = 'text',
  filter,
}) =>
  <div className={cx(styles.textInput, className)}>
    <input
      required
      id={field}
      type={type}
      value={fields[field]}
      onChange={e =>
        !filter || filter(e.target.value)
          ? fieldChanged({ field, value: e.target.value })
          : e.preventDefault()}
    />
    <label htmlFor={field}>
      {name}
    </label>
  </div>

export default connect(
  state => ({
    fields: state.forms.fields,
  }),
  actions
)(TextInput)
