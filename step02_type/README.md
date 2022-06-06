#2.2 Types of TS part One (14:26)
### Types
기본 타입
```typescript
let a : number = 1;
let b : string = "il";
let c : boolean = true
let d : boolean[] = [true];
let e : number[] = [1,2];

let f = [1,2];
let g = "il";
```
가능한 한  TypeScript가 자동으로 값을 추론하도록 하는게 좋다.


### Optional type
player object가 있다고 가정하고
player들 중 몇몇은 age가 있고 몇몇은 age가 없다고 생각해보자.
어떻게 Typescript와 소통해야할까?
```typescript
// player 는 object type이고 age는 있거나 undefined라고 되어있다.
const player : {
  name: string,
  age?: number
} = {
  name: "jeon",
}

if (player.age && player.age < 10) {
  // age는 optional하기때문에 값이 있는지 먼저 체크해준다.
}
```

재사용을 위해 player를 type으로 만들어보자
- 참고로 type은 어느 타입에나 적용할 수 있다!
-
```typescript
type Age = number;
type Player = {
  name:string,
  age?:Age
}

const nico : Player ={
  name : "nico"
}

const jeon : Player = {
  name : "jeon",
  age : 12
}
```

Function의 Return type 지정하기
```typescript
function playerMaker(name:stirng) : Player{
  // return Player object 
  return {
    name:name, 
    // or name
  }
}
```

```typescript
const PlayerMaker = (name:string) => ({name})
// argument는 string이고 name이 들어잇는 object를 리턴한다.
const PlayerMaker = (name:string) : Player=> ({name})
// Player type의 object를 리턴한다.
```