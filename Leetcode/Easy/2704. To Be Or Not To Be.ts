/**
 *  2704. To Be Or Not To Be
 *  https://leetcode.com/problems/to-be-or-not-to-be/description/
 *
 *  expect(5).toBe(5); // true
 *  expect(5).notToBe(5); // throws "Equal"
 */

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean
  notToBe: (val: any) => boolean
}

function expect(val: any): ToBeOrNotToBe {
  const toBe = (_val: any) => {
    if (val === _val) return true
    else throw new Error('Not Equal')
  }

  const notToBe = (_val: any) => {
    if (val === _val) throw new Error('Equal')
    else return true
  }

  return {
    toBe,
    notToBe,
  }
}
