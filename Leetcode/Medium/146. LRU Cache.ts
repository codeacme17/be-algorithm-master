/**
 *  146. LRU 缓存
 *  https://leetcode.com/problems/lru-cache
 *
 */

class LRUCache {
  private cache: Map<number, number>
  private capacity: number

  constructor(capacity: number) {
    this.cache = new Map()
    this.capacity = capacity
  }

  get(key: number) {
    if (!this.cache.has(key)) return -1

    const v = this.cache.get(key)!
    this.cache.delete(key)
    this.cache.set(key, v)
    return this.cache.get(key)
  }

  put(key: number, value: number) {
    if (this.cache.has(key)) this.cache.delete(key)
    this.cache.set(key, value)
    if (this.cache.size > this.capacity)
      this.cache.delete(this.cache.keys().next().value)
  }
}
