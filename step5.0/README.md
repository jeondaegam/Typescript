
# 5.0 Introduction
# 5.1Target
가끔 수동으로 써줘야 할 일이 생기곤 한다..
웹팩을 쓰는거랑 비슷
대부분의 사람들ㅇㄴㄷ ㅓ이상 웹팩을 사용하지 않지만 
사실은 다양한 패키지, 라이브러리, 프레임워크들이 웹팩 프로젝트를 당신ㅇ네게 만들어주는 것이다.

만약 TypeScript로 NextJS Application을 만든다면
커맨드 하나로 타입스크립트가 설정된 어플리케이션이 알아서 만들어 ㅈㄹ 것이다.


하지만 이런 설정을 아는 것이 중요한 이유는
타입스크립트 구성에 관한 인사이트를 제공해주기 때문이다.

타입스크립트 프로젝트를 만들고 설정에 대해 알아보자

개발환경
NodeJS, VScode

타입스크립트 설치
`npm i -D typescript`
D를 입력함으로써 타입스크립트가 devDependencies에 설치된다.

새 파일 만들기
이 파일의 이름은 tsconfig.json 이어야만 한다.
이 파일이 있으면 vs code는 우리가 타입스크립트로 작업한다는 것을 즉시 알게된다.
자동완성 기능을 제공해줌.
`touch tsconfig.json`

작성해야하는 내용
- 타입스크립트 파일의 위치(어디에 위치하는가?)

타입스크립트는 컴파일러다..!

package.json
```json
// 새 스크립트를 만든다 `npm run build`를 입력하면 tsc가 작동한다. 
    "build": "tsc" 
```

### target
ES3 
- const가 존재하지 않는다. var만 존재한다.
const가 ㅁ너데?
- 화살표 함수도 존재하지 앟는다.
- 클래스가 존재하지 않는다. 

ES6
- 화살표 함수가 사용되기 시작함


es6을 사용하는 것이 가장 이상적이다.
대부분의 nodeJs브라우저가 es6을 지원하기 때문이다.
e3을 써도 되지만 너무 낮은 버전이기도 하고 코드가 엄청 길어질 수 있다.
2022를 쓴다면 아주 최소한의 호환성도 충족시키지 못할 수 있다. 엄청 최신의 JS를 쓰겠다는 말이기 때문에!

NodeJS같은 백앤드를 위한 JavaScript 코드를 만들고 싶ㅇ을 때는
더 오래된 환경에 코드를 배포하고 싶다면 더 낮은 버전을 target으로 설정하면 된다.
target 세팅을 node.js 버전과 호환되는 버전으로 직접 바꿔주면 된다.

server provider?

target은 어떤 JavaScirpt의 기능을 다운레벨되는지를 바꾼다. 
클래스를 받아서 함수로 다운-컴파일 하는 것처럼 !


# 5.3 Declaration Files (정의 파일)
JavaScript 코드의 모양을 TypeScript에 설명해주는 파일이다. 


d.ts 파일
정의파일에서 타입스크립트가 우리가 사용하는 타입을 찾아낸다. 


## @use a JSDoc
JSDoc?
코멘트로 이루어진 문법
함수 바로 위에 코메트를 적으면 타입스크립트가 이를 읽는다.

js => ts 코드로 모두 바꾸기 어려울 때, js코드 위에 코멘트를 적어 
타입을 체크하거나 보호장치를 더할 수 있다.

이미 프로덕션에서 사용중인 웹사이트거나 서버에서 돌아가는 코드인데
타입스크립트 보호는 받고 싶다면 
tsconfig.json의 allowJs:true에 더해 코멘트를 열심히 달아주자
- tsconfig.json
```json
{
  "allowJs": true
}
```
[코멘트 작성 방법](https://jsdoc.app/)

## package.json
```json
// start를 실행하면 build 폴더 안의 index.js 파일을 실행한다.
"start": "node build/index.js" 
```


## Blocks
ts-node  
빌드 없이 타입스크립트를 실행할 수 있게 한다.   
개발 환경에서만 사용한다. 빌드 없이 빠르게 새로고침 하고 싶을 때 사용!
ts-node가 컴파일할 필요 없이 타입스크립트 코드를 대신 실행해줘
```shell
npm i -D ts-node
```

```json
"scripts": {
"dev": "ts-node src/index", //확장자 .ts는 빼도 ok
}
```

nodemon
자동으로 커맨드를 재실행해줘서 일일히 커맨트를 
재실행 하거나 서버를 재시작할 필요가 없어진다.

```shell
npm i nodemon
```

Hash 값을 만든다.
crypto
```typescript
// import * as crypto from "crypto"
import  crypto from "crypto"
```
*as 와 같이 불러오고 싶지 않다면
"esModuleInterop": true,
설정은 tsconfing.json에 더해주자


## 5.6 Definitely Typed