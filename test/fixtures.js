import moment from 'moment'

const dates = [
  {
    year: 2018,
    month: 4,
    day: 10,
  },
]

export default {
  events: {
    specificDuration: {
      startsAt: moment({
        ...dates[0],
        hour: 18,
      }),
      duration: 2.75 * 60,
      title: 'Vuelo a Paris',
      location: 'Barcelona BCN',
    },
    allDay: {
      startsAt: moment({ year: 2018, month: 4, day: 13 }),
      title: "Dad's birthday",
      isAllDay: true,
    },
  },
}
