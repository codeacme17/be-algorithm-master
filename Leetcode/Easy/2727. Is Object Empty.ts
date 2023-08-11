/**
 *  2727. Is Object Empty
 *  https://leetcode.com/problems/is-object-empty/description/
 *
 */

function isEmpty(obj: Record<string, any> | any[]): boolean {
  return !Object.keys(obj).length
}
