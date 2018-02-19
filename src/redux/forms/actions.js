import moment from 'moment'
import { humanizeDuration } from '../../lib/dates'

export default {
  setFields(evt) {
    const startMoment = moment(evt.startsAt)
    return {
      type: 'SET_FIELDS',
      payload: evt.id
        ? {
            'event.isAllDay': evt.isAllDay,
            'event.startsAtHours': evt.isAllDay ? '' : startMoment.format('h'),
            'event.startsAtMinutes': evt.isAllDay
              ? ''
              : startMoment.format('m'),
            'event.startsAtMeridian': evt.isAllDay
              ? ''
              : startMoment.format('a'),
            'event.duration': evt.isAllDay
              ? evt.duration
              : humanizeDuration(evt.duration).time,
            'event.durationUnits': evt.isAllDay
              ? 'd'
              : humanizeDuration(evt.duration).units,
            'event.title': evt.title,
            'event.location': evt.location,
          }
        : {
            'event.isAllDay': false,
            'event.startsAtHours': '',
            'event.startsAtMinutes': null,
            'event.startsAtMeridian': 'am',
            'event.duration': 1,
            'event.durationUnits': 'h',
            'event.title': '',
            'event.location': '',
          },
    }
  },
  fieldChanged({ field, value }) {
    return {
      type: 'FORM_FIELD_CHANGED',
      payload: { field, value },
    }
  },
}
