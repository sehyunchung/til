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
