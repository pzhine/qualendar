import moment from 'moment'

const dates = [
  {
    year: 2018,
    month: 3,
    day: 10,
  },
]

export default {
  events: {
    specificDuration: {
      id: 1,
      startsAt: moment({
        ...dates[0],
        hour: 6,
      }).valueOf(),
      duration: 2.75 * 60,
      title: 'Vuelo a Paris',
      location: 'Barcelona BCN',
    },
    allDay: {
      id: 2,
      startsAt: moment({ year: 2018, month: 3, day: 13 }).valueOf(),
      title: "Dad's birthday",
      isAllDay: true,
    },
    specificDuration2: {
      id: 3,
      startsAt: moment({
        ...dates[0],
        hour: 11,
        minute: 45,
      }).valueOf(),
      duration: 1.25 * 60,
      title: 'Vuelo a Londres',
      location: 'Paris CDG',
    },
    allDay2: {
      id: 4,
      startsAt: moment({ year: 2018, month: 3, day: 13 }).valueOf(),
      title: 'Return videotapes',
      isAllDay: true,
    },
  },
}
