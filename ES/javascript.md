## String

### String Methods

#### `String.prototype.slice`

기본적으로 `str.slice(beginIndex, endIndex)`의 형태. 아래와 같이 동작한다.

```js
'String'.slice(0, 2); // 'St'
```

index 가 음수일 경우엔 str.length 를 더한값으로 취급된다. 즉, 아래 두 코드는 같은 값을 반환한다.

```js
'String'.slice(-2, -1); // 'n'

'String'.slice(4, 5); // 'n'
```

`beginIndex >= str.length`인 경우 빈 문자열이 반환되고,

```js
'String'.slice(6, 123); // ''

'String'.slice(7, 0); // ''
```

`endIndex >= str.length`인 경우 문자열의 끝까지로 취급한다.

```js
'String'.slice(0, 6); // 'String'

'String'.slice(0, 9912348); // 'String'
```

---

## Array

### Array Methods

#### `Array.prototype.some`

`[].some(fn(currentValue, index, array))` 의 형태이다. 반환값은 `boolean`.

배열의 각 요소를 인수로 받은 함수에 넣어 하나라도 truthy 이면 `true`, 아니면 `false`를 반환.

---

## Function

### `arguments`

`function` 구문을 통해 생성된 함수가 호출될 때는, `arguments` 라는 변수가 함수 내부에 자동으로 생성된다. `arguments`는 배열은 아니고 유사-배열 객체.

### `function.length`

`function.length`는 parameter 의 갯수를 의미한다.

### Arrow Functions

화살표 함수는 자신의 `this`를 갖지 않고, 사용 방식에 따라 달라지지도 않으며, 선언된 스코프의 `this`를 가리킨다.

## `null`과 `undefined`

`null`과 `undefined`는 비슷해 보이지만 다른 의미를 갖는다.

* 초기화 되지 않은 무엇: `undefined`
* 아무 것도 없는 것: `null`

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

`typeof undefined`는 `undefined` 지만
`typeof null` 은 `object` 이다.

```js
typeof null; // "object" ("null" 이 아닌 데엔 역사적인 이유가 있다.)
typeof undefined; // "undefined"
```

역사적인 이유:
초기 자바스크립트에서 값은 타입 태그와 값으로 표현되었는데, 오브젝트의 타입 태그가 `0`이었고, `null`은 `NULL` 포인터(즉 `0x00`)였다. 그 결과 null 이 `0`을 타입 태그로 갖게 되었고 그리하여 `typeof null` 이 `object`가 된 것.

EcmaScript 표준에 `typeof null === 'null'`이 제안되기도 했지만 [거절당했다](https://archive.is/sPyGA#selection-101.8-114.0)([reference](https://stackoverflow.com/a/18808270/8994411)).

```js
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
isNaN(1 + null); // false
isNaN(1 + undefined); // true
```

```js
console.log(undefined == undefined); // true
console.log(null == undefined); // true

console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false
```

`null`이나 `undefined`를 체크할 땐 `== null`을 쓰는 것이 권장된다.

```js
function foo(arg: string | null | undefined) {
  if (arg != null) {
    // ...
  }
}
```

한가지 예외는 루트 레벨에서의 `undefined` 값이다.

### root level undefined

보통의 경우 `== null`을 사용하면 되지만 전역 레벨에선 예외다. 스트릭트 모드라면 Reference Error 를 발생시키기 때문.
전역 레벨에서 변수의 타입이 어떤지 알아볼 땐 `typeof`를 사용하도록 한다.

```js
if (typeof someglobal !== 'undefined') {
  //  someglobal은 안전하게 사용할 수 있다.
  console.log(someglobal);
}
```

더글러스 크록포드 님은 `null`은 배드아이디어이며 우리 모두는 그냥 `undefined`를 써야 한다고 했다 카더라.

## 재미있는 점들

위의 얘기를 하다가 한가지 더 알게 됐는데, 콘솔에서 `!!document.all`을 하면 `false`가 튀어나온다는 것이었다. 왜일까 다시 찾아보았더니 이런 답변을 찾을 수 있었다. &rarr; https://stackoverflow.com/a/10394873/8994411

그러니까 `document.all`이 아래와 같이 구버전 브라우저 검사에 사용되어왔고,

```js
if (document.all) {
  // 고리짝 브라우저에서 실행
} else if (document.getElementById) {
  // "모던" 브라우저에서 실행
}
```

대부분의 브라우저들이 하위호환 이슈 때문에 쩔 수 없이 `document.all`을 지원하고 있는 관계로 `document.all`이 truthy 이면 아래 코드가 실행되지 않는다는 이슈가 있다고 한다. 물론, `if` 조건과 `else if` 조건의 위치를 바꾸면 해결될 문제이지만 그냥 위의 코드를 쓰고 있는 경우가 많아 falsy 로 해둘 수 밖에 없다고.

