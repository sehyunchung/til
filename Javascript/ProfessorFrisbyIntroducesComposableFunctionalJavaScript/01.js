const Box = x => ({
  map: f => Box(f(x)), // 체이닝이 가능하도록 Box 전체를 반환
  fold: f => f(x), // 함수를 받아 결과 값을 반환
  inspect: () => `Box(${x})`, // console.log를 찍으면 Box(x)구조를 반환
})

const nextCharForNumberString = str =>
  Box(str)
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .fold(c => c.toLowerCase())

const result = nextCharForNumberString(' 64 ')

console.log(result)

const moneyToFloat = str =>
  Box(str)
    .map(s => s.replace(/\$/g, ''))
    .map(r => parseFloat(r))

const percentToFloat = str =>
  Box(str.replace(/\$/g, '')) // 한단계 정도는 걍 해주나봄
    .map(replaced => parseFloat(replaced))
    .map(number => number * 0.01)

// const applyDiscount = (price, discount) =>
//   moneyToFloat(price).fold(cost =>
//     percentToFloat(discount).fold(savings => cost - cost * savings)
//   )














const applyDiscount = (price, discount) =>
  moneyToFloat(price).map(
    cost => percentToFloat(discount).map(savings => cost - cost * savings)
  )





console.log(applyDiscount('10000KRW', '10%'))
























