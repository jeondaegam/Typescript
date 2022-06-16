## Polymorphism(다형성)

그리스어 Poly
many, several, much, multi
polygon(다각형)

morphos
form, structure, 구조

즉 여러가지 다른 모양들, 형태들

함수는 여러가지 다른 형태를 가지고 있다.

### Concrete type이란?
우리가 전부터 봐왔던 타입들을 의미한다.  
number, string, boolean, void, unknown 등등


### Generic
타입의 placeholder같은 것이다.  
concrete type 대신 사용할 수 있다.
사용할 확실한 타입을 모를 때 사용한다.

#### 사용방법  
`<{Generic변수명}>(arr: number[]):void`
제네릭을 받는다는걸 알려주자!

```typescript
type SuperPrint = {
  <T, V>(arr: number[]): void // 얘는 어떻게 바꾸지?
  <Potato>(arr: Potato[]): void
  <Placeholder>(arr: Placeholder[]): void
}
```
- Typescript에게 타입을 유추하도록 알려준 것이다.0
3.3 다시보기 

3.4 다시보기 Conclusions
다른 개발자가 사용할 기능을 개발하거나 React.js, Nest.js, 를 
사용한다면 Typescript에게 Generic을 보내게 될 것이다.

```typescript
function superPrint<T>(a: T[]) {
  return a[0]
}
```
