/**
 *  2627. Debounce
 *  https://leetcode.com/problems/debounce/
 *
 *  const log = debounce(console.log, 100);
 *  log('Hello'); // cancelled
 *  log('Hello'); // cancelled
 *  log('Hello'); // Logged at t=100ms
 *
 */

type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
  let timer: ReturnType<typeof setTimeout>

  return (...args) => {
    timer && clearTimeout(timer)
    timer = setTimeout(fn, t, ...args)
  }
}
