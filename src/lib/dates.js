/* eslint-disable import/prefer-default-export */
import moment from 'moment'

export const datePath = d => {
  const md = moment(d)
  return `${md.format('YYYY')}/${md.format('M')}/${md.format('D')}`
}

export const getViewPath = path => path.substr(0, 3)

export const getParentPath = path => path.split('/').slice(0, 4).join('/')

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
