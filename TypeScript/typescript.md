# TypeScript

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
