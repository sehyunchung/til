# Execution Context

구조는 아래와 같다.

<table style="text-align: center">
  <tr>
    <th colspan="2">Execution Context</th>
  </tr>
  <tr>
    <td>Varible Object</td>
    <td>{vars, function declarations, arguments...}</td>
  </tr>
  <tr>
    <td>Scope Chain</td>
    <td>[Variable Objects + all parent scopes]</td>
  </tr>
  <tr>
    <td>thisValue</td>
    <td>Context Object</td>
  </tr>
</table>

실행맥락이 생성 과정은 아래와 같다.

1.  활성 객체 생성
    * 해당 컨텍스트에서 실행에 필요한 여러 정보를 담을 객체
    * 매개변수, 변수, 객체 등등을 저장
2.  arguments 객체 생성
    * arguments 객체(유사 배열)
3.  스코프 정보 생성
4.  변수 생성
    * 활성 객체와 변수 객체는 걍 같은 말임
5.  this 바인딩
6.  코드 실행
