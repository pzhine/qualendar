import { sortForMonth } from './dates'
import { april2018unsorted, april2018 } from '../../test/fixtures'

it('should sort events correctly', () => {
  // console.log(JSON.stringify(april2018unsorted, null, 2))
  expect(sortForMonth(april2018unsorted)).toEqual(april2018)
})
