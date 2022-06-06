# ReadOnly

읽기 전용으로 만들 수 있다.
Javascript에는 없는 기능

```typescript
type Player = {
  readonly name:Name
  age?:Age
}

const numbers: readonly number[] = [1,2]
const names: readonly string[] = ["1","2"]
names.push() // <= (X)
```

### Tuple
정해진 개수의 요소를 가져야 하는 array를 만들 수 있다.
순서에 맞는 타입을 가져야 한다.
API등에 사용!
Javascript에는 없는 기능
```typescript
const player: [string, number, boolean] = ["jeon", 1, true]
player[0] = 1 // (X) 0번쨰 index는 string이 들어가야 한다.

const player: readonly [string, number, boolean] = ["jeon", 1, true]
player[0] = "hi" // (X) readonly
```

### Undefined, null
```typescript
let a : undefined = undefined
let b : null = null
```

### any
- Typescript로부터 빠져나오고 싶을 떄 사용한다.
- Typescript의 모든 보호장치를 비활성화 시킨다.
- 비어있는 값을 쓰면 기본값이 any가 된다.
- 말그대로 아무 타입이나 될 수 있기 때문이다.
```typescript
let a = [] // any[]

const a : any[] = [1,2,3,4]
const b : any = true
a + b // 가능해짐
```

Typescript에만 존재하는 type 3가지
Typescript의 Type Checker와 소통하도록 도와준다.


unknown
- 변수의 타입을 미리 알지 못할 떄 사용한다.
```typescript
let a:unknown;
// typescript가 강제적으로 type check를 시킨다.
if(typeof a === 'number') {
  let b = a + 1
}
if (typeof a ==='string') {
  let b = a.toUpperCase();
}

```

void
비어있는 것을 말한다.  
아무것도 return 하지 않는 함수를 대상으로 사용한다.  
Typescript가 이 함수는 아무것도 리턴하지 않는다고 자동으로 인식한다.
```typescript
function hello() {
  console.log('x') // 마우스를 대보면 :void를 확인 가능.
}
```

never
함수가 절대 return하지 않을 떄 사용한다.
예를들어 함수에서 exception이 발생할 때 !
리턴하지 않고 에러를 발생시킬 때 사용
```typescript
function hello():never {
  throw new Error("error")
}
```



