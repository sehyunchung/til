# Elm

Elm 하면서 피똥싼 경험

---
## `Browser` module
Elm 웹앱의 단계적 API. Elm이 컨트롤 할 범위에 따라 달라진다.

- `sandbox` - 연습용

- `element` - Elm이 컨트롤 하는 html element 하나 만들기. 자바스크립트로 만든 앱에 부분적용하기 좋다.

- `document` - `<title>`과 `<body>`를 컨트롤 할 수 있음

- `application` - url 컨트롤이 가능한 SPA


## `0.19` Problems

0.19 업데이트 하면서 API가 다 바뀌어서 예전 문서 보다간 피똥을 싸게 된다.

### `Browser.sandbox`

`Html.beginnerProgram` 이 0.19에서 `Browser.sandbox` 가 되었음
  
참고링크: [https://github.com/elm/compiler/blob/master/upgrade-docs/0.19.md#changes](https://github.com/elm/compiler/blob/master/upgrade-docs/0.19.md#changes)

---

## `List`

### `drop : Int -> List a -> List a`

-> `Int` 를 argument로 받아 리스트의 head부터 n개를 삭제한 새 리스트를 반환함

```elm
drop 2 [1,2,3,4] == [3,4]
```

반대 방향으로 동작하는 것은 `take`

### `take : Int -> List a -> List a`

```elm
take 2 [1,2,3,4] == [1,2]
```

## `Time` 다루기

Elm app은 커다란 함수, 그러니까 상태에 따라 view를 반환하는 순수 함수이고, 시간은 그 함수 외부 세계에서 계속해서 변하는 무언가 이므로 부수효과로 취급된다. 시간을 그냥 띡 불러서 사용할 순 없게 되어있다.

예를 들어 현재 시간을 구하는 함수 `Time.now`의 설명은 이렇게 되어있다.

```elm
now: Task x Time
```

