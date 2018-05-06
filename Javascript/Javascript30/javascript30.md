# Javascript30

Wes Bos 의 Javascript30 을 따라가보았다.

## 3. Playing with CSS Variables

### 해보면서 느낀 점들:

1.  argument 로 들어가는 함수에는 `()`를 붙이지 않는다는 걸 또 까먹음. 이걸 왜 자꾸 까먹는지 모르겠네.

    ```js
    input.addEventListener('eventname', function);
    ```

2.  `this` 를 사용하는 것에 아직 익숙하지 않음. `this` 에 관한 것을 *공부*하는 것도 방법이겠으나 실제 문제 해결에 사용해보는 것이 가장 확실한 방법일 것.

    ```js
    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffix
      );
    }
    ```

    이번 예제에선 `this` 를 위와 같이 알아서 바인드되게 하고 싶을 때 `function` 키워드를 쓴다는 것을 실제 용례로 처음 확인한 것 같다. 그런데 뭔가.. '옳다'는 느낌이 들지 않음. 이 느낌에 대해 좀 더 알아봐야겠다.
