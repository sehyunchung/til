# C

컴퓨터에 대해 깊은 이해를 갖기 위해 틈틈이 C 를 훑어보기로 했다. 쓸 수 있는 시간이 많지 않으므로, 심플하게 http://www.learn-c.org/ 튜토리얼을 따라가보기로 한다.

## Learn the Basics

### Hello, World!

헬로월드를 위해 사용할 함수는 `printf`인데, 라이브러리에 들어있고 그 라이브러리가 들어있는 파일은 `stdio.h`이다.

그래서 맨 처음으로 해야 할 일은 `stdio.h` 파일을 불러오는 것이다.

```c
#include <stdio.h>
```

그 다음 해야 할 일은 `main` 함수를 열어주는 것이다. `main` 함수는 정수를 반환하는 함수이므로, 앞에 `int`를 붙여준다. 모든 c 프로그램은 이것으로 시작한다.

```c
#include <stdio.h>
int main()
{
  /* ... */
}
```

프로그램이 정상 동작했을 때 `main` 함수가 반환해야 하는 값은 `0`이다. 그래서 마지막에 `return 0`을 추가해준다.

```c
#include <stdio.h>
int main()
{
  /* ... */
  return 0;
}
```

마지막으로 "Hello, World!"를 출력하기 위해 `printf` 함수를 사용한다.

```c
#include <stdio.h>
int main()
{
  printf("Hello, World!");
  return 0;
}
```

이렇게 첫번째 프로그램이 완성되었다.

## Variables & Types

### Data Types

C 는 여러 데이터 타입을 갖고 있긴 하지만, 기본 타입은 몇 개 정도이다.

* Integers - 양 혹은 음의 정수. `char`, `int`, `short`, `long`, `long long`을 사용해 정의한다.
* Unsigned Integers - 양의 정수. `unsigned char`, `unsigned int`, `unsigned short`, `unsigned long`, `unsigned long long`
* Floating point numbers - 소수점 아래의 값을 포함하는 자연수. `float`, `double`
* Structures - 후에 다룬다.

각각의 type 들이 다룰 수 있는 값들이 각각 다른데, 예를 들어 `char`는 -128 에서 127 까지인 반면, `long`은 -2,147,483,648 에서 2,147,483,647 까지 다룰 수 있다(`long`과 다른 수 데이터 타입은 사용되는 컴퓨터에 따라 다룰 수 있는 범위가 달라진다. 예를 들어 64bit 컴퓨터에선 –9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 로 늘어난다.).

boolean 타입이 없는 것에 주목하자. 필요한 경우 아래와 같이 따로 정의해준다.

```c
#define BOOL char
#define FALSE 0
#define TRUE 1
```

### 변수 정의하기

숫자값을 위한 변수로 `int`를 사용할 것이다. `int`에는 4 byte 가 할당되는데, -2,147,483,648 에서 2,147,483,647 까지의 값을 가질 수 있다.

```c
int foo;
int bar = 1;
```

`foo`는 정의되었으나 값이 없으므로 무엇이 들어있는지 알 수 없고, `bar`에는 숫자값 1 이 들어있다.

숫자 계산을 프로그래밍 해보자.

```c
#include <stdio.h>
int main() {
  int a = 0, b = 1, c = 2, d = 3, e = 4;
  a = b - c + d * e;
  printf("%d", a); /* 1-2+3*4 의 값인 11이 표시된다. */
  return 0;
}
```
