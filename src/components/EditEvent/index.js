import React from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import moment from 'moment'
import actions from '../../redux/app/actions'
import styles from './styles.scss'

import DatePicker from '../DatePicker'
import CloseButton from '../CloseButton'
import EnumInput from '../EnumInput'
import TextInput from '../TextInput'

import CheckIcon from '../../icons/check.svg'
import TrashIcon from '../../icons/trash.svg'

const EditEvent = ({ event, fields, saveEvent, deleteEvent }) => {
  const onSave = () => {
    saveEvent({
      id: event.id,
      isAllDay: fields['event.isAllDay'],
      startsAt: fields['event.isAllDay']
        ? event.startsAt
        : moment(event.startsAt)
            .hour(fields['event.startsAtHours'])
            .minute(fields['event.startsAtMinutes'])
            .valueOf(),
      duration: {
        m: parseFloat(fields['event.duration'], 10),
        h: parseFloat(fields['event.duration'], 10) * 60,
        d: parseFloat(fields['event.duration'], 10) * 60 * 24,
      }[fields['event.durationUnits']],
      title: fields['event.title'],
      location: fields['event.location'],
    })
  }
  const dprl = parseInt(fields['event.duration'], 10) > 1 ? 's' : ''
  return (
    <div className={styles.editEvent}>
      <div className={styles.header}>
        <DatePicker date={event.startsAt} />
        <CloseButton />
      </div>
      <div className={styles.subtitle}>
        {event.id ? 'Modify Event' : 'New Event'}
      </div>
      <div className={cx(styles.field, styles.inline)}>
        <label className={styles.label} htmlFor={'event.isAllDay'}>
          All day?
        </label>
        <EnumInput
          options={[{ name: 'No', value: false }, { name: 'Yes', value: true }]}
          field={'event.isAllDay'}
        />
      </div>
      {!fields['event.isAllDay'] &&
        <div className={styles.field}>
          <div className={styles.inline}>
            <TextInput
              type={'numeric'}
              name={'Starts At'}
              field={'event.startsAtHours'}
              filter={v => !v.match(/[^0-9]/) && v <= 12}
              className={styles.startsAt}
            />
            <EnumInput
              options={[
                { name: ':00', value: '0' },
                { name: ':15', value: '15' },
                { name: ':30', value: '30' },
                { name: ':45', value: '45' },
              ]}
              field={'event.startsAtMinutes'}
              className={styles.startsAtMinutes}
            />
          </div>
          <EnumInput
            options={[{ name: 'AM', value: 'am' }, { name: 'PM', value: 'pm' }]}
            field={'event.startsAtMeridian'}
          />
        </div>}
      <div className={styles.field}>
        <TextInput
          name={'Duration'}
          type={'numeric'}
          filter={
            fields['event.isAllDay']
              ? v => !v.match(/[^0-9]/)
              : v => !v.match(/[^0-9.]/)
          }
          field={'event.duration'}
        />
        <EnumInput
          options={
            fields['event.isAllDay']
              ? [{ name: `day${dprl}`, value: 'd' }]
              : [
                  { name: `hour${dprl}`, value: 'h' },
                  { name: `min${dprl}`, value: 'm' },
                  { name: `day${dprl}`, value: 'd' },
                ]
          }
          field={'event.durationUnits'}
        />
      </div>
      <div className={styles.field}>
        <TextInput name={'Title'} field={'event.title'} />
      </div>
      <div className={styles.field}>
        <TextInput name={'Location'} field={'event.location'} />
      </div>
      <div className={cx(styles.inline, styles.buttons)}>
        {event.id &&
          <div className={styles.delete}>
            <button onClick={() => deleteEvent(event)}>
              <TrashIcon />
            </button>
          </div>}
        <div className={styles.save}>
          <button onClick={onSave}>
            <CheckIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    fields: state.forms.fields,
  }),
  actions
)(EditEvent)
