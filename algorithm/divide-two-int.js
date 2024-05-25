// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。 
// 返回被除数 dividend 除以除数 divisor 得到的商。 
// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2 
// 输入: dividend = 10, divisor = 3 
// 输出: 3 
// 解释: 10/3 = truncate(3.33333..) = truncate(3) = 3

let divide = (dividend, divisor) => {
  if (divisor === 0) return Infinity;
  if (dividend === 0) return 0;
  if (divisor === 1) return dividend;

  let [dvd, dvs] = [dividend, divisor].map(Math.abs),
      sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0),
      sum = 0,
      res = 0;
  while (sum + dvs <= dvd) {
      let temp = dvs,
          count = 1;
      while (sum + temp + temp <= dvd) {
          temp += temp;
          count += count;
      }
      sum += temp
      res += count
  }

  return sign ? Math.min(res, 2147483647) : Math.max(-res, -2147483648);
}

let test = () => {
  console.log(`10 / 3 = ${divide(10, 3)}`)

  console.log(`56 / 4 = ${divide(56, 4)}`)

  console.log(`100 / 7 = ${divide(100, 7)}`)

  console.log(`100 / 60 = ${divide(100, 55)}`)
}

test()