import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import actions from '../../redux/forms/actions'
import styles from './styles.scss'

const EnumInput = ({ fields, field, options, fieldChanged, className }) =>
  <div className={cx(styles.enumInput, className)} id={field}>
    {options.map(opt =>
      <button
        key={opt.value}
        className={cx(styles.option, {
          [styles.isActive]: opt.value === fields[field],
        })}
        onClick={() => fieldChanged({ field, value: opt.value })}
      >
        {opt.name}
      </button>
    )}
  </div>

export default connect(
  state => ({
    fields: state.forms.fields,
  }),
  actions
)(EnumInput)
