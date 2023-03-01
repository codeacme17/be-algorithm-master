/**
 *  146. LRU 缓存
 *  https://leetcode.com/problems/lru-cache
 *
 *  题意：
 *  get - 数据被读取了，就是被使用了，所在的位置要刷新，浮到“顶部”
 *  set - 当缓存中 已有 该数据，则更新其位置
 *        当缓存中 没有 该数据，则写入内从，此时如果内存大小超出，则将最久没被使用的数据删除
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
