Hashmap
사전과 같다.
해싱 알고리즘을 쓰는 해시맵을 만들고 단어사전을 만들어보자.
- 새 단어 추가하기
- 단어 찾기
- 단어 삭제하기


```typescript
type Words = {
  [key:string]: string // string만을 property로 가지는 오브젝트 라는 의미이다.
  // [whatwver:string]:string , key의 이름은 아무거나!
  
  let dict :Words = {
    "potato" : "food"
}
}
```