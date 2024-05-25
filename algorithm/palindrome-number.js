/**
 * 给一个int，输出最小的，大于这个数的回文串
 * 比如说：12300 -> 12321
 */

let splitNumber = (n) => {
  let str = `${n}`
  let middle = parseInt(str.length / 2)
  let head = str.slice(0, middle)
  let tail = str.slice(middle)
  let mid = ''
  if (tail.length > head.length) {
    mid = tail[0]
    tail = tail.slice(1)
  }

  return {
    head: parseInt(head),
    tail: parseInt(tail),
    mid: mid === '' ? null: parseInt(mid)
  }
}

let reverseString = (str) => {
  let results = []

  for(let i = 0, j = str.length - 1; j >= 0; j--, i++){
    results[i] = str[j]
  }
  
  return results.join('')
}

let getPalindromeNumber = (n) => {
  let split = splitNumber(n)

  if (split.head > split.tail) {
    let tailStr = reverseString(`${split.head}`)
    return `${split.head}${split.mid ?? ''}${tailStr}`
  } else {
    let head = parseInt(`${split.head}${split.mid ?? ''}`)
    head++
    let headStr = split.mid ? split.head : head 
    let tailStr = reverseString(`${headStr}`)
    return `${head}${tailStr}`
  }

}

let test = () => {
  let number = 12389
  console.log(`Get Palindrome Number [${number}]: ${getPalindromeNumber(number)}`)

  number = 12311
  console.log(`Get Palindrome Number [${number}]: ${getPalindromeNumber(number)}`)

  number = 1289
  console.log(`Get Palindrome Number [${number}]: ${getPalindromeNumber(number)}`)

  number = 1211
  console.log(`Get Palindrome Number [${number}]: ${getPalindromeNumber(number)}`)
}

test()

