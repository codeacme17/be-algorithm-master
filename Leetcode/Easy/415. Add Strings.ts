/**
 *  415. 字符串相加
 *  https://leetcode.com/problems/add-strings/
 *
 *  思路:
 *  类似于题2. Add Two Numbers，不过要从尾部作为索引头进行遍历
 *
 */

function addStrings(num1: string, num2: string): string {
  let i1 = num1.length - 1;
  let i2 = num2.length - 1;
  let carry = 0;
  let res = "";

  while (i1 >= 0 || i2 >= 0 || carry > 0) {
    let v1: any = num1[i1] ? num1[i1] : "0";
    let v2: any = num2[i2] ? num2[i2] : "0";
    let sum = v1 * 1 + v2 * 1 + carry;
    res = `${sum % 10}${res}`;
    carry = Math.floor(sum / 10);
    i1--;
    i2--;
  }

  return res;
}

console.log(addStrings("173", "233"));
