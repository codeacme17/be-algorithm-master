/**
 *  2621. Sleep
 *  https://leetcode.com/problems/sleep/description/
 *
 *
 *  let t = Date.now()
 *  sleep(100).then(() => console.log(Date.now() - t)) // 100
 *
 */

async function sleep(millis: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, millis)
  })
}
