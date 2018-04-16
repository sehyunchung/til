# ✨Functional Javascript✨

[유인동](https://github.com/indongyoo)님의 [인프런 강의](https://www.inflearn.com/course/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/)🔥 를 따라가보았다.

## 순수함수

부수효과(side effect)가 없는 함수. 가장 단순한 예는 아래와 같을 것이다.

```js
function add(a, b) {
  return a + b;
}
```

_<p style="text-align: center;">어떤 상황에서도 다르게 동작할 수가 읍다.</p>_

부수효과가 없다는 것은 함수의 안과 밖 모두에 아무런 영향을 끼치지 않고 같은 인자를 넣으면 같은 결과를 반환하는 것을 말한다.

반대로 부수효과가 있는 함수를 살펴보면,

```js
let c = 10;
function add2(a, b) {
  return a + b + c;
}
```

변수 `c`가 프로그램이 동작하면서 값이 바뀔 수 있다면, 함수 `add2`의 반환하는 값은 `c`의 값에 따라 달라질 것이다.

```js
console.log(add2(10, 2)); // 22
console.log(add2(10, 3)); // 23
console.log(add2(10, 4)); // 24

c = 20;

console.log(add2(10, 2)); // 32
console.log(add2(10, 3)); // 33
console.log(add2(10, 4)); // 34
```

_<p style="text-align: center;">같은 걸 넣었는데 다른 게 나왔다!</p>_

또 이를테면 이런 식으로 외부에 영향을 미치는 함수가 있다면,

```js
let c = 10;
function add3(a, b) {
  c = b;
  return a + b;
}
```

역시 부수효과를 일으키므로 순수함수가 아니다.

또, 이런 함수를 생각해보면,

```js
const obj1 = { val: 10 };
function add4(obj, b) {
  obj.val += b;
}
```

일단 반환하는 값도 없고, 오브젝트의 값을 변경시키는 부수효과를 일으켰으므로 역시 순수함수가 아니다.

이에 반해 오브젝트를 다루는 순수함수를 생각해보면,

```js
const obj1 = { val: 10 };
function add5(obj, b) {
  return { val: obj.val + b };
}
```

이런식으로 `val` 값에 `b`를 더해준 새 오브젝트를 생성하는 식으로 동작하므로, 부수효과를 일으키지 않는다.

순수함수의 또 하나의 특징 혹은 다른 말로 한 특징은, 평가 시점이 상관 없다는 것이다. 외부의 영향을 받지도 외부에 영향을 주지도 않으므로, 언제 실행해도 같은 인자를 받으면 같은 값을 반환한다.

## 일급함수

함수를 값으로 다룰 수 있다는 뜻이다. 함수를 변수에 넣을 수도 있고 인자로 넘길 수도 있고, 값으로 반환 할 수도 있고 뭐 그런 것.

## `map`, `filter`

```js
const users = [
  { id: 1, name: 'ID', age: 36 },
  { id: 2, name: 'BJ', age: 32 },
  { id: 3, name: 'JM', age: 32 },
  { id: 4, name: 'PJ', age: 27 },
  { id: 5, name: 'HA', age: 25 },
  { id: 6, name: 'JE', age: 26 },
  { id: 7, name: 'JI', age: 31 },
  { id: 8, name: 'MP', age: 23 },
];
```

위 오브젝트를 어케어케 하는 코드를 일단 명령형으로 작성해보자.

```js
// 1. 30세 이상인 users를 거른다.
const new_list = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);
// 2. 30세 이상인 users의 names를 수집한다.
const names = [];
for (let i = 0; i < temp_users; i++) {
  names.push(temp_users[i].name);
}
// 3. 30세 미만인 users를 거른다.
const temp_users = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    temp_users.push(users[i]);
  }
}
// 4. 30세 미만인 users의 ages를 수집한다.
const ages = [];
for (let i = 0; i < temp_users.length; i++) {
  ages.push(temp_users[i].age);
}
console.log(ages);
```

위 코드들을 함수형으로 바꿔보면 어떻게 될까~~~요?

👇 이것은 대표적 순수함수 `filter`라고 한다.👇

```js
// 1. 30세 이상인 users를 거른다.
function _filter(users, predi) {
  const new_list = [];
  for (let i = 0; i < users.length; i++) {
    if (predi(users[i])) {
      new_list.push(users[i]);
    }
  }
  return new_list;
}

console.log(_filter(users, user => user.age >= 30)); // 넘나 간단하고 ✨declerative✨한 코드가 된다.

console.log(_filter(users, user => user.age < 30)); // 반대의 경우도 코드의 중복 없이 똑부러지게 해결된다.
```

포인트는 두번째 파라미터에 어떤 함수든지 넣을 수 있다는 점이고 그래서 이렇게 만든 함수는 단지 이 경우 뿐 아니라 어디든 사용될 수 있다. 그래서 굳이 `users`가 아니라 이렇게:

```js
function _filter(list, predi) {
  const new_list = [];
  for (let i = 0; i < list.length; i++) {
    if (predi(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}
```

`list`로 일반화해보면 이것의 아름다움을 좀 더 느껴볼 수 있겠고,

```js
function _filter(list, predi) {
  const new_list = [];
  for (let i in list) {
    if (predi(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}
```

로 더 줄여볼 수도 있겠다.

> 여기서 잠간! `for of`를 사용하면 인덱스가 아니라 값을 가져오므로 망한다.☠️

이번엔 값들을 빼올 수 있는 `map`님을 만들어보자 🙌

```js
// 2. 30세 이상인 users의 names를 수집한다.

// 일단 _map을 만들고,
function _map(list, mapper) {
  const new_list = [];
  for (let i in list) {
    new_list.push(mapper(list[i]);
  }
  return new_list;
}

const over_30 = _filter(users, user => user.age >= 30) // _filter로 30세 이상을 걸러서,
const names = _map(over_30, user => user.name) // 이름 배열을 얻는다.
// 근데 이렇게 하는 건 함수형의 방식이 아니고, 아래와 같이👇
_map(
  _filter(users, user => user.age >= 30),
  user => user.name
)
// 이렇게 대입을 줄이고 함수를 중첩시키는 것이 훵셔널✨의 방식이다
```
