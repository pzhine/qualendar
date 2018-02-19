/* eslint-disable import/prefer-default-export */
import moment from 'moment'
import { matchPath } from 'react-router'

export const datePath = d => {
  const md = moment(d)
  return `${md.format('YYYY')}/${md.format('M')}/${md.format('D')}`
}

export const monthPath = d => {
  const md = moment(d)
  return `/m/${md.format('YYYY')}/${md.format('M')}`
}

export const getViewPath = path => path.substr(0, 3)

export const getParentPath = path => path.split('/').slice(0, 4).join('/')

export const pathToMoment = path => {
  const match = matchPath(path, '/:v/:year/:month/:day?')
  return moment({
    year: match.params.year,
    month: match.params.month - 1,
    day: match.params.day,
  })
}

// from https://github.com/intljusticemission/react-big-calendar/blob/master/src/utils/dates.js
export const monthMath = {
  firstVisibleDay(date) {
    const firstOfMonth = moment(date).startOf('month')
    return moment(firstOfMonth).startOf('week').valueOf()
  },
  lastVisibleDay(date) {
    const endOfMonth = moment(date).endOf('month')
    return moment(endOfMonth).endOf('week').valueOf()
  },
  visibleDays(date) {
    let current = monthMath.firstVisibleDay(date)
    const last = monthMath.lastVisibleDay(date)
    const days = []
    while (moment(current).isSameOrBefore(last, 'day')) {
      days.push(current)
      current = moment(current).add(1, 'day')
    }
    return days
  },
}

const stringCompare = (a, b) => {
  if (a < b) {
    return -1
  }
  if (a === b) {
    return 0
  }
  return 1
}

const eventCompare = (a, b) => {
  if (a.isAllDay) {
    return b.isAllDay ? stringCompare(a.title, b.title) : -1
  }
  if (moment(a.startsAt).isBefore(moment(b.startsAt))) {
    return -1
  }
  if (moment(a.startsAt).isSame(moment(b.startsAt), 'minute')) {
    return stringCompare(a.title, b.title)
  }
  return 1
}

export const sortForMonth = events =>
  events.reduce((sparse, evt) => {
    const dt = moment(evt.startsAt).date()
    sparse[dt] = [...(sparse[dt] || []), evt]
    sparse[dt].sort(eventCompare)
    if (evt.isAllDay && evt.duration > 1) {
      for (let i = 1; i < evt.duration; i += 1) {
        const edt = moment(evt.startsAt).add(i, 'day').date()
        sparse[edt] = [
          ...(sparse[edt] || []),
          { ...evt, startedOn: evt.startsAt },
        ]
      }
    }
    return sparse
  }, {})
