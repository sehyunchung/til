## String Methods

### `String.prototype.slice`

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
