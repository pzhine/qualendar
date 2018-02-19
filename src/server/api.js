/* eslint-disable no-console */

import express from 'express'
import moment from 'moment'
import uuid from 'uuid/v1'
import fixtures from '../../test/fixtures'

const router = express.Router()

console.log('SEEDING DATABASE')
const events = Object.keys(fixtures.events).reduce(
  (dict, key) => ({
    ...dict,
    ...(fixtures.events[key].id
      ? { [fixtures.events[key].id]: fixtures.events[key] }
      : {}),
  }),
  {}
)

router.get('/month/:year/:month', (req, res) => {
  const { year, month } = req.params

  const monthMoment = moment({ year, month })
  const monthEvents = Object.keys(events).reduce(
    (list, key) =>
      moment(events[key].startsAt).isSame(monthMoment, 'month')
        ? list.concat(events[key])
        : list,
    []
  )
  res.status(200).json(monthEvents)
})

router.post('/event', (req, res) => {
  console.log('POST EVENT', req.body)
  const id = uuid()
  events[id] = { ...req.body, id }
  res.status(200).json({ id }).end()
})

router.put('/event/:id', (req, res) => {
  console.log('PUT EVENT', req.body)
  events[req.params.id] = req.body
  res.status(200).end()
})

router.delete('/event/:id', (req, res) => {
  console.log('DELETE EVENT', req.body)
  delete events[req.params.id]
  res.status(200).end()
})

export default router
