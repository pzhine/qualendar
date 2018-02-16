/* eslint-disable import/prefer-default-export */
import moment from 'moment'

export const datePath = d => {
  const md = moment(d)
  return `${md.format('YYYY')}/${md.format('M')}/${md.format('D')}`
}

export const getViewPath = path => path.substr(0, 3)
