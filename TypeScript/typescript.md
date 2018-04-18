# TypeScript

Frontend Masters 의 TypeScript 코스를 따라가보았다.

## Type Annotations

변수 선언시 `variable: type` 의 형태로 타입을 지정해준다.

```ts
let teacherAge: number = 34;
```

함수의 parameter 도 같은 방식으로 지정해준다.

```ts
function login(username: string, password: string): User {
  /* do something */
}

const login = (username: string, password: string): User => {
  /* do something */
};
```

## Object Shapes

```ts
function validateInputField(input: HTMLInputElement) {
  /* ... */
}

validateInputElement(x);
```

위에서 x 가 `HTMLInputElement`인지 어떻게 알까? 타입스크립트는 오브젝트의 형태를 보고 판단한다.

아래와 같은 `myCar` 오브젝트가 있다고 할 때,

```ts
let myCar = { make: string, model: string, year: number };
```

아래 오브젝트는 통과하지만,

```ts
myCar = {
  make: 'Honda',
  model: 'Accord',
  year: 1992,
};
```

아래와 같이 형태가 다른 오브젝트들은 컴파일시 에러가 발생한다.

```ts
myCar = {
  make: 'Honda',
  model: 'Accord',
  // year가 없다.
};

myCar = {
  make: 'Honda',
  model: 'Accord',
  year: 1992,
  color: { r: 255, g: 0, b: 0 }, // color가 추가되었다.
};
```

## Interfaces

오브젝트의 형태를 매번 지정한다면 너무 귀찮을 것이다. 그래서 타입스크립트는 마치 오브젝트-클래스처럼 형태를 저장할 수 있는 기능을 제공하며, 그것을 `interface`라고 한다.

```ts
// 기본적으론 이런 형태이고,

interface Car {
  make: string;
  model: string;
  year: number;
}

// 아래와 같이 추가할 수도 있다.

interface Car {
  color: string;
}

// 아래와 같이 사용한다.

let lisasCar: Car = {
  make: 'Ford',
  model: 'Monster Truck',
  year: 2016,
  color: '#fff', // 이번엔 통과!
};
```
