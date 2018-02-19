import moment from 'moment'
import { push } from 'react-router-redux'
import { monthPath } from '../../lib/dates'
import { april2018unsorted } from '../../../test/fixtures'

export default {
  toggleMenuIsActive(isActive) {
    return {
      type: 'TOGGLE_MENU_ACTIVE',
      payload: isActive,
    }
  },
  saveEvent(eventData) {
    return async dispatch => {
      dispatch({
        type: 'SAVE_EVENT',
        payload: eventData,
      })
      await new Promise(resolve => setTimeout(resolve, 1000))
      return dispatch(push(monthPath(eventData.startsAt)))
    }
  },
  deleteEvent(eventData) {
    return async dispatch => {
      dispatch({
        type: 'DELETE_EVENT',
        payload: eventData,
      })
      await new Promise(resolve => setTimeout(resolve, 1000))
      return dispatch(push(monthPath(eventData.startsAt)))
    }
  },
  fetchEvents(query) {
    return async dispatch => {
      dispatch({
        type: 'FETCH_EVENTS',
        payload: query,
      })
      await new Promise(resolve => setTimeout(resolve, 1000))
      return dispatch({
        type: 'RECEIVE_EVENTS',
        payload: {
          query,
          response: moment(query.date).month() === 3 ? april2018unsorted : [],
        },
      })
    }
  },
}
