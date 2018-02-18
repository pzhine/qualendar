import moment from 'moment'

export const dates = [
  {
    year: 2018,
    month: 3,
    day: 10,
  },
  {
    year: 2018,
    month: 3,
    day: 19,
  },
]

const fixtures = {
  events: {
    specificDuration: {
      id: 1,
      isAllDay: false,
      startsAt: moment({
        ...dates[0],
        hour: 6,
        minute: 30,
      }).valueOf(),
      duration: 2.75 * 60,
      title: 'Vuelo a Paris',
      location: 'Barcelona BCN',
    },
    spanDays: {
      id: 5,
      isAllDay: false,
      startsAt: moment({
        ...dates[0],
        hour: 20,
      }).valueOf(),
      duration: 8 * 60,
      title: 'Vuelo durante la noche',
      location: 'New York JFK',
    },
    allDay: {
      id: 2,
      startsAt: moment({ year: 2018, month: 3, day: 13 }).valueOf(),
      title: "Dad's birthday",
      isAllDay: true,
    },
    specificDuration2: {
      id: 3,
      isAllDay: false,
      startsAt: moment({
        ...dates[1],
        hour: 11,
        minute: 45,
      }).valueOf(),
      duration: 1.25 * 60,
      title: 'Vuelo a Londres',
      location: 'Paris CDG',
    },
    allDay2: {
      id: 4,
      startsAt: moment({ year: 2018, month: 3, day: 24 }).valueOf(),
      duration: 3,
      title: 'Return videotapes',
      isAllDay: true,
    },
    newEvent: {
      startsAt: moment({ year: 2018, month: 3, day: 22 }).valueOf(),
    },
  },
  states: {
    editEvent: {
      forms: {
        fields: {
          'event.isAllDay': false,
          'event.startsAtHours': 6,
          'event.startsAtMinutes': 30,
          'event.startsAtMeridian': 'am',
          'event.duration': 2.75,
          'event.durationUnits': 'h',
          'event.title': 'Vuelo a Paris',
          'event.location': 'Barcelona BCN',
        },
      },
    },
    editAllDayEvent: {
      forms: {
        fields: {
          'event.isAllDay': true,
          'event.startsAtHours': null,
          'event.startsAtMinutes': null,
          'event.startsAtMeridian': 'am',
          'event.duration': 1,
          'event.durationUnits': 'd',
          'event.title': "Dad's birthday",
          'event.location': '',
        },
      },
    },
    newEvent: {
      forms: {
        fields: {
          'event.isAllDay': false,
          'event.startsAtHours': '',
          'event.startsAtMinutes': null,
          'event.startsAtMeridian': 'am',
          'event.duration': 1,
          'event.durationUnits': 'h',
          'event.title': '',
          'event.location': '',
        },
      },
    },
    eventFormError: {
      forms: {
        errors: ['An error message'],
      },
    },
  },
}

export const april2018 = {
  10: [fixtures.events.specificDuration, fixtures.events.spanDays],
  13: [fixtures.events.allDay],
  19: [fixtures.events.specificDuration2],
  24: [fixtures.events.allDay2],
  25: [{ ...fixtures.events.allDay2, startedOn: moment('2018-04-24').valueOf }],
  26: [{ ...fixtures.events.allDay2, startedOn: moment('2018-04-24').valueOf }],
}

export default fixtures
