# HTML

### `data` attribute

html 요소에 값을 넣어주는 어트리뷰트. 아래와 같이 사용할 수 있다.

```html
<div data-somedata="hello"></div>
```

자바스크립트에 데이터 값을 불러올 땐 `element.dataset.somedata`을 사용한다.

```js
const divEl = document.querySelector('div');
console.log(divEl.dataset.index); // "hello"
```

혹시 문제(attribute 이름을 잘못짓는다던가)가 생길 수 있는 커스텀 어트리뷰트 + `getAttribute` 말고 깔끔하게 `data` + `dataset`을 사용하도록 하자.
