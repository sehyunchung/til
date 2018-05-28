# egghead.io - Professor Frisby Introduces Composable Functional JavaScript

## 1. Create linear data flow with container style types (Box)

```js
const nextCharForNumberString = str => {
  const trimmed = str.trim()
  const number = parseInt(trimmed)
  const nextNumber = number + 1
  return String.fromCharCode(nextNumber)
}

const result = nextCharForNumberString('64')

console.log(result) // A
```

넘버 스트링을 받아서 1 을 더하고 그에 맞는 캐릭터를 반환하는 함수이다.
이것을 한번에 처리하는 코드로 바꿔보면 아래와 같이 될 것이다.

```js
const nextCharForNumberString = str =>
  String.fromCharCode(parseInt(str.trim()) + 1)

const result = nextCharForNumberString('64')

console.log(result) // A
```

잘 동작하지만 아무래도 쉽게 읽히지 않는 코드가 되어버리고 만다.

이것을 아이템 하나 짜리 배열로 바꿔 개선해보면 아래와 같이 된다.

```js
const const nextCharForNumberString = str =>
  [str]
  .map(s => s.trim())
  .map(s => parseInt(s))
  .map(i => i + 1)
  .map(i => String.fromCharCode(i))

const result = nextCharForNumberString('64');

console.log(result); // A
```

`.map()`을 합성에 쓸 수 있다는 것을 알 수 있다.

좀 더 개선해보자.

```js
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

const result = nextCharForNumberString('64')

console.log(result)
```

다른 예를 살펴보자.

```js
const moneyToFloat = str => parseFloat(str.replace(/\$/g, ''))

const percentToFloat = str => {
  const replaced = str.replace(/\$/g, '')
  const number = parseFloat(replaced)
  return number * 0.01
}

const applyDiscount = (price, discount) => {
  const cost = moneyToFloat(price)
  const savings = percentToFloat(discount)
  return cost - cost * savings
}
```

위의 코드에 아까 만든 Box 를 사용해보면,

```js
const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`,
})

const moneyToFloat = str =>
  Box(str)
    .map(s => s.replace(/\$/g, ''))
    .fold(r => parseFloat(r))
```

이렇게 될 것이다. 어느게 낫다는 건 상황에 따라 다르겠지만, 아무튼 `Box` 를 쓰면 nesting 이 아니라 composition 을 하게 된다는 것을 알아두고 넘어가자.

이어서 `percentToFloat`도 `Box`를 써서 리팩토링 해보자.

```js
const percentToFloat = str =>
  Box(str.replace(/\$/g, '')) // 한단계 정도는 걍 해주나봄
    .map(replaced => parseFloat(replaced))
    .fold(number => number * 0.01)
```

다음은 `applyDiscount`의 차례.

```js
const applyDiscount = (price, discount) => moneyToFloat(price)
//...
```

그런데 이러면 다시 Box 를 씌워야 하므로, 위의 두 함수의 마지막 fold 를 map 으로 바꿔준다.

```js
const moneyToFloat = str =>
  Box(str)
    .map(s => s.replace(/\$/g, ''))
    .map(r => parseFloat(r))

const percentToFloat = str =>
  Box(str.replace(/\$/g, '')) // nesting도 뭐 한단계 정도는 걍 해주자
    .map(replaced => parseFloat(replaced))
    .map(number => number * 0.01)
```

다시 구현해보자. 문제는 `applyDiscount`는 인수가 두 개고 각각 다른 함수를 이용한다는 것인데, 아래와 같이 `map`으로 바로 체이닝하면 `cost` 를 사용하는 클로저를 만들어 해결할 수 있다.

```js
const applyDiscount = (price, discount) =>
  moneyToFloat(price).map(
    cost => percentToFloat(discount).map(savings => cost - cost * savings) // 클로저를 이용
  )
```

근데 위 함수를 실행시켜보면,

```js
console.log(applyDiscount('10000KRW', '10%')) // Box([object Object])
```

를 반환하므로 `fold`를 사용해서 값만 반환하도록 해준다.

```js
const applyDiscount = (price, discount) =>
  moneyToFloat(price).fold(cost =>
    percentToFloat(discount).fold(savings => cost - cost * savings)
  )

console.log(applyDiscount('10000KRW', '10%')) // 9000
```
