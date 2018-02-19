import { april2018unsorted } from '../../../test/fixtures'
import moment from 'moment'

export default {
  toggleMenuIsActive(isActive) {
    return {
      type: 'TOGGLE_MENU_ACTIVE',
      payload: isActive,
    }
  },
  saveEvent(eventData) {
    return {
      type: 'SAVE_EVENT',
      payload: eventData,
    }
  },
  deleteEvent(id) {
    return {
      type: 'DELETE_EVENT',
      payload: id,
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
