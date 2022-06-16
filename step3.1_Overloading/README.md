
## Overloading  
함수가 서로다른 여러개의 Call signatures를 가지고 있는 것을 의미한다.  
즉, 여러 개의 Call signatures가 있는 함수이다.

```typescript
type Add = {
  (a: number, b: number) : number
  (a: number, b: string) : number 
}

const add: Add = (a,b) => {
  if(typeof  b ==="string") return a
  return a + b 
}
```

```typescript
type Add = {
  (a:number, b:number) : number
  (a:number, b:number, c:number) : number
}

const add:Add = (a,b,c?:number) => {
  if (c) return a+b+c
  return a+b
}

add(1,2)
add(1,2,4)
```