/**
 *  优先级队列数据结构，堆实现
 *
 *  Reference: https://juejin.cn/post/6869522782955405325
 *
 */

export class MaxPQHeap {
  arr: any[];

  constructor() {
    this.arr = [0];
  }

  public push(item: any): void {
    let { arr } = this;
    arr.push(item);
    this.swim(arr.length - 1);
  }

  private swim(k: number): void {
    let { arr, compare, parent } = this;
    while (k > 1 && compare(arr[k], arr[parent(k)])) {
      this.swap(parent(k), k);
      k = parent(k);
    }
  }

  private sink(k: number): void {
    let { arr, compare, left, right } = this;
    let size = this.size;

    while (left(k) <= size) {
      let child = left(k);
      if (right(k) <= size && compare(arr[right(k)], arr[child])) {
        child = right(k);
      }
      if (compare(arr[k], arr[child])) return;
      this.swap(k, child);
      k = child;
    }
  }

  private swap(i: number, j: number) {
    let arr = this.arr;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  get size(): number {
    return this.arr.length - 1;
  }

  public peek() {
    return this.arr[1];
  }

  private left(k: number): number {
    return k * 2;
  }
  private right(k: number) {
    return k * 2 + 1;
  }
  private parent(k: number) {
    return Math.floor(k / 2);
  }
  private compare(a: any, b: any): boolean {
    return a < b;
  }
}
