## `this`

`this`는 함수 안에서 쓰이는, 특정 객체를 가리키는 키워드이다.

1.  보통 함수 안에 있는 `this` 는 전역 객체를 가리킨다.

    ```js
    function foo() {
      console.log(this);
    }

    foo(); // Window
    ```

    _strict mode 에선 `undefind`를 반환한다._

2.  객체의 메서드로 정의된 함수 안의 `this`는 해당 객체를 가리킨다.

    ```js
    const obj = {
      name: 'Foo',
      fn() {
        return this.name;
      },
    };

    obj.fn(); // 'Foo'
    ```

3.  `bind`로 묶어주면 묶어준 객체에 바인딩 된다.

    ```js
    const obj = {
      name: 'Foo',
    };

    const fn = function() {
      return this.name;
    };

    const fn2 = fn.bind(obj);

    fn2(); // 'Foo'
    ```

4.  생성자 함수에서 쓰인 경우 해당 함수로 생성된 객체를 가리킨다.

    ```js
    function Person(name) {
      this.name = name;
      this.callName = function() {
        return `Hello ${this.name}`;
      };
    }

    const foo = new Person('foo');

    foo.callName(); // 'Hello foo'
    ```
