/**
 *  2648. Generate Fibonacci Sequence
 *  https://leetcode.com/problems/generate-fibonacci-sequence/description/
 *
 *  const gen = fibGenerator();
 *  gen.next().value; // 0
 *  gen.next().value; // 1
 *
 */

function* fibGenerator(): Generator<number, any, number> {
  let current = 0
  let next = 1

  while (true) {
    yield current
    ;[current, next] = [next, next + current]
  }
}
