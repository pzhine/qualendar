import React from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/forms/actions'
import styles from './styles.scss'

const TextInput = ({ fields, field, name, fieldChanged }) =>
  <div className={styles.textInput}>
    <input
      required
      id={field}
      type="text"
      value={fields[field]}
      onChange={e => fieldChanged({ field, value: e.target.value })}
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
