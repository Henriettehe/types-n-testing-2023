import { createCounter } from './intro'

it('should be able to run tests', () => {
  expect(1 === 1).toBe(true)
  /*
   * Tips: You can add .not before .toBe to test the opposite
   * expect(1 === 1).not.toBe(false)
   */
})

<<<<<<< Updated upstream
it('should return new number for every call to counter', () => {
  const getNextValue = createCounter()
  const first = getNextValue()
  const second = getNextValue()
  expect(first).not.toBe(second)
})

it('should return 1 for first call after creating a counter', () => {
  const getNextValue = createCounter()
  const first = getNextValue()
  expect(first).toBe(1)
=======
it('should return 1 for first call after creating a counter', () => {
  const getNextValue = createCounter()
  const first = getNextValue()
  expect(first).not.toBe()
})

it('should return new number for every call to counter', () => {
  const getNextValue = createCounter()
  const first = getNextValue()
  expect(first).not.toBe()
>>>>>>> Stashed changes
})

it('should return higher number for every call to counter', () => {
  const getNextValue = createCounter()
  const first = getNextValue()
  const second = getNextValue()
  expect(first).toBeLessThan(second)
  /*
   * Tips: You can find more functions for expect here:
   * https://vitest.dev/api/expect.html
   */
})
