/**
 *  20. 有效括号
 *  https://leetcode.com/problems/valid-parentheses/
 *
 *  思路：
 *  将括号维护到map中，将左括号作为key，右括号作为value
 *  维护一个栈
 *  遍历字符串，如果当前遍历的字符串是左括号，那么就unshift到stack中
 *  如果是右括号，则比对栈顶是否与之匹配，如果不匹配直接返回 false
 *  如果匹配，则shift出栈。
 *  最后检查stack是否为空，如果为空则表示全部匹配返回 true，
 *  如果不为空则表示不匹配，则返回 false
 *
 *  Review:
 *  2022.12.6 Soso - 判断逻辑有问题
 *
 */

function isValid(s: string): boolean {
  if (s.length % 2 === 1) {
    return false;
  }
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  const stack: string[] = [];

  for (let i of s) {
    if (map.has(i)) stack.unshift(i);
    else {
      if (map.get(stack[0]) === i) stack.shift();
      else return false;
    }
  }

  return !stack.length;
}

console.log(isValid("[{}]"));
