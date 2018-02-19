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
    day: 24,
  },
  {
    year: 2018,
    month: 3,
    day: 15,
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
    allDay3: {
      id: 5,
      startsAt: moment({ year: 2018, month: 3, day: 15 }).valueOf(),
      duration: 1,
      title: 'Tax day',
      isAllDay: true,
    },
    allDay4: {
      id: 6,
      startsAt: moment({ year: 2018, month: 3, day: 15 }).valueOf(),
      duration: 1,
      title: 'Spring cleaning',
      isAllDay: true,
    },
    specificDuration3: {
      id: 7,
      isAllDay: false,
      startsAt: moment({
        ...dates[2],
        hour: 20,
        minute: 0,
      }).valueOf(),
      duration: 1.25 * 60,
      title: 'Party with John',
    },
    specificDuration4: {
      id: 8,
      isAllDay: false,
      startsAt: moment({
        ...dates[2],
        hour: 20,
        minute: 0,
      }).valueOf(),
      duration: 60,
      title: 'Call mom',
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

export const april2018unsorted = [
  fixtures.events.specificDuration,
  fixtures.events.spanDays,
  fixtures.events.specificDuration2,
  fixtures.events.allDay,
  fixtures.events.allDay2,
  fixtures.events.allDay3,
  fixtures.events.allDay4,
  fixtures.events.specificDuration3,
  fixtures.events.specificDuration4,
]

export const april2018 = {
  10: [fixtures.events.specificDuration, fixtures.events.spanDays],
  13: [fixtures.events.allDay],
  15: [
    fixtures.events.allDay4,
    fixtures.events.allDay3,
    fixtures.events.specificDuration4,
    fixtures.events.specificDuration3,
  ],
  24: [fixtures.events.allDay2, fixtures.events.specificDuration2],
  25: [
    {
      ...fixtures.events.allDay2,
      startedOn: moment('2018-04-24').valueOf(),
    },
  ],
  26: [
    {
      ...fixtures.events.allDay2,
      startedOn: moment('2018-04-24').valueOf(),
    },
  ],
}

export const april2018loadedState = {
  app: {
    months: {
      '2018.3': {
        events: april2018,
      },
    },
  },
}

export const april2018cleanState = {
  app: { months: {} },
}

export default fixtures
