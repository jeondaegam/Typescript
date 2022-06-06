Call(=Function) signature
- 함수 위에 마우스를 올렸을 때 나타나는 설명
- 함수를 어떻게 호출해야하는지 알려준다.
- 함수의 매개변수와 반환 값의 타입을 모두 type으로 미리 선언하는 것이다
```typescript
type Add = (a:number, b:number) => number;

// const add = (a:number ,b:number) => a+b //1.
const add:Add = (a,b) => a+b //2.
```
- 타입을 만들 수 있고, 함수가 어떻게 작동하는지 서술해둘 수 있다.
- 함수의 내용을 구현하기 전에 먼저 타입으로 매개변수와 리턴값을 서술해두는 것이다.
- 1번의 내용을 2번으로 분리하여 구현할 수 있다.

- props로 함수를 보내면, Typescript한테 ㅇ떻게 함수가 작동하는지 설명해줘야 한다.
- 
- 프로그램을 디자인하면서 타입을 먼저 생각하고 코드를 구현할 수 있도록 도와준다.

