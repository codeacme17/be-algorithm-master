/**
 *  2619. Array Prototype Last
 *  https://leetcode.com/problems/array-prototype-last/description/
 *
 *
 *  const arr = [1, 2, 3];
 *  arr.last(); // 3
 */

declare global {
  interface Array<T> {
    last(): T | -1
  }
}

Array.prototype.last = function () {
  const len = this.length
  if (!len) return -1
  return this[len - 1]
}

export {}
