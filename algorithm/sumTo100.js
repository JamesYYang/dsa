/**
 * 一串数字（0 - 9）每个数字之间可以加 + - 号或者不加，组成的表达式计算结果等于 给定的目标数，输出所有满足条件的表达式。 
 * 例如： [1 2 3 4 5 6 7 8 9]  目标 100 
 * 可能的组合： 1 + 23 - 4 + 56 + 7 + 8 + 9 -1 - 2 + 34 - 5 - 6 + 78 + 9
 */

let getExpress = (target) => {
  if (target < 1) throw new Error('input must be greater than 0')
  else if (target === 1) return ['1']

  let results = []
  let exp = getExpress(target - 1)

  exp.forEach((e) => {
    results.push(`${e}${target}`)
    results.push(`${e}+${target}`)
    results.push(`${e}-${target}`)
  })

  return results
}


let allPossible = (target) => {
  let exprs = getExpress(target)

  console.log('total express')
  console.log(JSON.stringify(exprs, null, 2))

  exprs.forEach((e) => {
    if (eval(e) === 100) {
      console.log(`${e} = 100`)
    }
  })
}

allPossible(9)