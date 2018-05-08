# Functions

## Function Expressions vs Function Declarations

자바스크립트에서 함수를 만드는 방식엔 두가지가 있다. 함수 선언식과 표현식을 이용하는 방식인데 기본적인 형태는 아래와 같다.

```js
// 함수문
function funcDeclaration() {
  return 'A function declaration';
}

// 함수 표현식
var funcExpression = function() {
  return 'A function expression';
};
```

그러니까 함수를 변수에 따로 할당하는 것을 표현식이라고 하는 것.

> 이런 것도 가능하긴 하다.
>
> ```js
> const fn1 = function fn0() {
>   console.log('fn0!!');
> };
> ```
>
> 동작은 아래와 같이 한다.
>
> ```js
> fn1(); // 'fn0!!'
> fn0(); // Uncaught ReferenceError: fn0 is not defined
> ```
>
> 함수 외부에선 액세스가 불가능하다는 것.

### 표현식의 이점

* 클로저
* 다른 함수에 인수로 넘길 수 있음
* IIFE

### 선언식의 이점(?)

* 호이스팅이 된다.

## Closure

함수 `fn1` 안에서 선언된 함수 `fn2`가 바깥 함수 fn1 안에서 선언된 변수 `foo` 를 사용하고 있고, `fn1`은 `fn2`를 반환할 때, 얼핏 생각하기와는 다르게 반환된 함수 `fn2`에서 실행이 끝난 `fn1`안의 변수 `foo`에 계속해서 접근할 수 있는데, 이것을 가리켜 클로저라고 한다.

```js
function fn1() {
  const foo = 'bar';
  function fn2() {
    return foo;
  }
  return fn2;
}

const fn3 = fn1();

fn3(); // 'bar'
```

대표적인 예시로 makeAdder 함수가 있다.

```js
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

add5(10); // 15
add10(10); // 20
```
