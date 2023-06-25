/**
 *  2622. Cache With Time Limit
 *  https://leetcode.com/problems/cache-with-time-limit/description/
 *
 *  Your TimeLimitedCache object will be instantiated and called as such:
 *  var obj = new TimeLimitedCache()
 *  obj.set(1, 42, 1000); // false
 *  obj.get(1) // 42
 *  obj.count() // 1
 *
 */

type MapItem = {
  value: number
  timer: any
}

class TimeLimitedCache {
  cache: Map<number, MapItem>

  constructor() {
    this.cache = new Map()
  }

  set(key: number, value: number, duration: number): boolean {
    let res = false

    if (this.cache.has(key)) {
      clearTimeout(this.cache.get(key)!.timer as number)
      res = true
    }

    const timer = setTimeout(() => {
      this.cache.delete(key)
    }, duration)

    this.cache.set(key, {
      value,
      timer,
    })

    return res
  }

  get(key: number): number {
    if (this.cache.has(key)) return this.cache.get(key)?.value!
    return -1
  }

  count(): number {
    return this.cache.size
  }
}
