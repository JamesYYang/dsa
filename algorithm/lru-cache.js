const { Yallist } = require('yallist')

class LRUCache {
  constructor(maxEntry, expiry) {
    this.maxEntry = maxEntry ?? 0
    this.expiry = expiry
    this.cache = new Map()
    this.ll = new Yallist()
  }

  add(key, value) {
    if (this.cache.has(key)) {
      let entry = this.cache.get(key).value
      entry.ttl = Date.now() + this.expiry
      entry.value = value
      return
    }

    let entry = {
      key: key,
      value: value,
      ttl: Date.now() + this.expiry
    }

    this.ll.unshift(entry)
    this.cache.set(key, this.ll.head)

    if (this.maxEntry !== 0 && this.ll.length > this.maxEntry) {
      this.removeOldest()
    }
  }

  get(key) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key)
      let entry = node.value
      if (entry.ttl < Date.now()) {
        this.removeElement(node)
        return
      }

      this.ll.unshiftNode(node)
      return entry.value
    }
  }

  remove(key) {
    if (this.cache.has(key)) {
      this.removeElement(this.cache.get(key))
    }
  }

  size() {
    return this.ll.length
  }

  removeOldest() {
    this.removeElement(this.ll.tail)
  }

  removeElement(node) {
    this.cache.delete(node.value.key)
    this.ll.removeNode(node)
  }

  clear() {
    this.cache = new Map()
    this.ll = new Yallist()
  }

}

let sleep = async(tm) => new Promise((resolve) => setTimeout(() => resolve(), tm))


let testLRU = async () => {
  let lru = new LRUCache(10, 5 * 1000)

  for (let i = 1; i <= 10; i++) {
    lru.add(i, i)
  }

  console.log(`lru size: ${lru.size()}`)

  lru.add(11, 11)

  console.log(`lru size: ${lru.size()}`)

  let tv = lru.get(1)

  console.log(`key: 1, value: ${tv}`)

  tv = lru.get(5)
  console.log(`key: 5, value: ${tv}`)

  await sleep(5 * 1000)

  tv = lru.get(5)
  console.log(`key: 5, value: ${tv}`)
}

testLRU().then(() => console.log('done'))