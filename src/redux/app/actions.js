import moment from 'moment'
import axios from 'axios'
import { push } from 'react-router-redux'
import { monthPath } from '../../lib/dates'
import config from '../../content/config.json'

let baseURL = config.apiEndpoint.prod
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = config.apiEndpoint.dev
}

const api = axios.create({ baseURL, timeout: 10000 })

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
        const putRequest = axios.create({
          method: 'PUT',
          baseURL: `${baseURL}/events/${eventData.id}.json`,
        })
        await putRequest.put(null, eventData)
      } else {
        await api.post(`/events.json`, eventData)
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
      await api.delete(`/events/${eventData.id}.json`)
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
      const yearAndMonth = `${monthMoment.year()}/${monthMoment.month() + 1}`
      const response = (await api.get(`/events/${yearAndMonth}.json`)).data
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
