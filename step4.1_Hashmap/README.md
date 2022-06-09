Hashmap
사전과 같다.
해싱 알고리즘을 쓰는 해시맵을 만들고 단어사전을 만들어보자.

- 새 단어 추가하기
- 단어 찾기
- 단어 삭제하기

```typescript
type Words = {
  [key: string]: string // key=> string, property=>string
  //property에 대해 미리 알진 못하지만 type은 알고있을 때 사용한다.
  // [whatwver:string]:string , key의 이름은 아무거나!

  let dict: Words = {
  "potato": "food"
}
}
```