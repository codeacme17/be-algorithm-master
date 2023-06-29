/**
 *  2649. Nested Array Generator
 *  https://leetcode.com/problems/nested-array-generator/description/
 *
 *  const gen = inorderTraversal([1, [2, 3]]);
 *  gen.next().value; // 1
 *  gen.next().value; // 2
 *  gen.next().value; // 3
 *
 *  关键点：
 *  使用 `yiled*` 来对多维数组进行递归
 *  yield* 表达式用于委托给另一个generator 或可迭代对象
 *  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield*
 *
 */

type MultidimensionalArray = (MultidimensionalArray | number)[]

function* inorderTraversal(
  arr: MultidimensionalArray
): Generator<number, void, unknown> {
  for (const el of arr) {
    if (Array.isArray(el)) yield* inorderTraversal(el)
    else yield el
  }
}
