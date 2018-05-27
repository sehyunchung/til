# egghead.io - Professor Frisby Introduces Composable Functional JavaScript

## 1. Create linear data flow with container style types (Box)

```js
const nextCharForNumberString = str => {
  const trimmed = str.trim();
  const number = parseInt(trimmed);
  const nextNumber = number + 1;
  return String.fromCharCode(nextNumber);
};

const result = nextCharForNumberString('64');

console.log(result); // A
```

넘버 스트링을 받아서 1 을 더하고 그에 맞는 캐릭터를 반환하는 함수이다.
이것을 한번에 처리하는 코드로 바꿔보면 아래와 같이 될 것이다.

```js
const nextCharForNumberString = str =>
  String.fromCharCode(parseInt(str.trim()) + 1);

const result = nextCharForNumberString('64');

console.log(result); // A
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
});

const nextCharForNumberString = str =>
  Box(str)
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .fold(c => c.toLowerCase());

const result = nextCharForNumberString('64');

console.log(result);
```
