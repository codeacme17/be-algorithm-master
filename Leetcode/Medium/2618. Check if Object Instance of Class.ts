/**
 *  2618. 检查是否是类的对象实例
 *  https://leetcode.com/problems/check-if-object-instance-of-class/description/
 *
 */

const checkIfInstanceOf = (obj: any, classFunction: any): boolean => {
  if (
    obj === null ||
    obj === undefined ||
    typeof classFunction !== 'function'
  )
    return false

  let target = classFunction.prototype
  let proto = obj.__proto__

  while (proto) {
    if (proto === target) return true
    proto = proto.__proto__
  }

  return false
}
