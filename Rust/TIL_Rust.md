# [RustByExample](https://rustbyexample.com/hello.html#hello-world) 무작정 따라하기
> High-level 언어 하나, Low-level 언어 하나를 공부하는 게 좋다고들 카더라.
## 1. Hello World
### `fn main()`
Rust의 main 함수이고 일단 이것이 기본인가보다.
```rust
fn main() {
  // my-kickass-rust-code
  }
```
### Rust는 컴파일 언어이고 컴파일러의 이름은 `rustc`이다.
사용법은 아래와 같이 `rustc file.rs`인가보다.
```
$ rustc hello.rs
```
컴파일에 성공하면 바이너리 코드`hello`를 생성해주고, 터미널에서 `./hello`을 입력해서 실행할 수 있다.
### `println!`
js의 `console.log()`와 비슷한 것으로 Rust엔 `println!`이 있다. 차이점은 이걸 [*macro*](https://rustbyexample.com/macros.html)라고 부른다는 점(인 것으로 현 시점에서 추정 됨).
```rust
fn main() {
  println!("Hello World!");
}
```
## 1.1 Comments
```rust
fn main() {
  // 자바스크립트랑
  /* 
   * 똑
   * 같
   * 넹
   */
  let x = 5 + /* 90 + */ 5; // 이런 것도 됐었나?
  println!("Is `x` 10 or 100? x={}", x);
}
```
## 1.2 Formatted Print
기능이 뭔가 엄청 많다...
```rust
fn main() {
  println!("{} days", 31); // 31 days
  println!("{0}, this is {1}, {1}, this is {0}", "Alice", "Bob"); // Alice, this is Bob, Bob, this is Alice
  println!("{subject} {verb} {object}",
          object = "the lazy dog",
          subject = "the quick brown fox",
          verb = "jumps over"); // the quick brown fox jumps over lazy dog
  println!("{} of {:b} people know binary, the other half doesn't", 1, 2); // 1 of 2 people know binary, the other half doesn't
  println!("{number:>width$}", number=1, width=6); //      1 <= 공백을 넣을 수 있다!
  println!("{number:>0width$}", number=1, width=6); // 000001
  println!("My name is {0}, {1} {0}", "Bond", "James"); // My name is Bond, James Bond <= 넘 신기..
}
```
