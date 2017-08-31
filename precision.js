//the issue because the internal binary conversion
const num1 = 0.1
const num2 = 0.2
console.log(`${num1} + ${num2} = `, num1 + num2)

//one of many solution
const precision = 10
const num3 = num1 * precision
const num4 = num2 * precision
console.log(`${num1} + ${num2} = `, (num3 + num4) / precision)