# [RustByExample](https://rustbyexample.com/hello.html#hello-world) 무작정 따라하기
> High-level 언어 하나, Low-level 언어 하나를 공부하는 게 좋다고들 카더라.
## 1. Hello World
* ### `fn main()`
Rust의 main 함수이고 일단 이것이 기본인 것 같다.
```rust
fn main() {
  // my-kickass-rust-code
  }
```
* ### Rust는 컴파일 언어이고 컴파일러의 이름은 `rustc`이다.
사용법은 아래와 같이 `rustc file.rs`인 것 같다.
`$ rustc hello.rs`
컴파일에 성공하면 바이너리 코드를 생성해주는 것 같은데, 같은 폴더에 `.hello`라는 이름으로 생성되는 것 같다.
* ### `println!`
js의 `console.log()`와 비슷한 것으로 Rust엔 `println!`이 있다. 차이점은 이걸 [*macro*](https://rustbyexample.com/macros.html)라고 부른다는 점(인 것으로 현 시점에서 추정 됨).
```rust
fn main() {
  println!("Hello World!");
}
```
