import moment from 'moment'
import axios from 'axios'
import { push } from 'react-router-redux'
import { monthPath } from '../../lib/dates'

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

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
      if (eventData.id) {
        await api.put(`/event/${eventData.id}`, eventData)
      } else {
        await api.post(`/event`, eventData)
      }
      dispatch({
        type: 'EVENT_SAVED',
        payload: eventData,
      })
      return dispatch(push(monthPath(eventData.startsAt)))
    }
  },
  deleteEvent(eventData) {
    return async dispatch => {
      dispatch({
        type: 'DELETE_EVENT',
        payload: eventData,
      })
      await api.delete(`/event/${eventData.id}`)
      dispatch({
        type: 'EVENT_DELETED',
        payload: eventData,
      })
      return dispatch(push(monthPath(eventData.startsAt)))
    }
  },
  fetchEvents(query) {
    return async dispatch => {
      dispatch({
        type: 'FETCH_EVENTS',
        payload: query,
      })
      const monthMoment = moment(query.date)
      const yearAndMonth = `${monthMoment.year()}/${monthMoment.month()}`
      const response = (await api.get(`/month/${yearAndMonth}`)).data
      return dispatch({
        type: 'RECEIVE_EVENTS',
        payload: {
          query,
          response,
        },
      })
    }
  },
}
