
function add (a,b) {
  return a+b
}
// 파라미터 a와 b는 'any'type을 가지게 된다.



function minus(a:number, b:number) {
  return a-b
}
// 마우스를 올려보면 return type이 number 라는 것을 typescript가 유추하므로
// return type을 선언 하는 것이 필수는 아니다.

