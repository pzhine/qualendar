import moment from 'moment'
import initialState from './initialState'
import { sortForMonth } from '../../lib/dates'

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_MENU_ACTIVE': {
      return { ...state, menuIsActive: action.payload }
    }
    case 'FETCH_EVENTS': {
      const queryMoment = moment(action.payload.date)
      const monthIndex = `${queryMoment.year()}.${queryMoment.month()}`
      return {
        ...state,
        months: {
          ...state.months,
          [monthIndex]: { isLoading: true },
        },
      }
    }
    case 'RECEIVE_EVENTS': {
      const queryMoment = moment(action.payload.query.date)
      const monthIndex = `${queryMoment.year()}.${queryMoment.month()}`
      return {
        ...state,
        months: {
          ...state.months,
          [monthIndex]: { events: sortForMonth(action.payload.response) },
        },
      }
    }
    case 'SAVE_EVENT':
    case 'DELETE_EVENT': {
      const queryMoment = moment(action.payload.startsAt)
      const monthIndex = `${queryMoment.year()}.${queryMoment.month()}`
      return {
        ...state,
        months: {
          ...state.months,
          [monthIndex]: { events: null },
        },
      }
    }
    default: {
      return state
    }
  }
}
