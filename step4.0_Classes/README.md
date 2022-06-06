# 4.0 Classes
- 어떻게 클래스를 만드는지 알아보자
- 많은 양의 반복되는 코드들을 쓰지 않도록 어떻게 막아주는지 알아보자


private, public
Typescript에서만 사용되는 키워드이다.
js 파일로 변환할 경우 사라진다.
javascirpt에서 반영되지 않더라도 Typescript를 쓰는동안 보호받을 수 있다.

- private
property를 private으로 만든다면, 그 클래스를 상속하더라도 그 property에 접근할 수 없다.


abstract class(추상클래스)  
다른 클래스가 상속받을 수 있는 클래스
직접 인스턴스를 만들 수는 없다.
오직 다른곳에서 상속받을 수만 있고 직접 인스턴스를 만들지는 못한다.
직접 인스턴스를 만들지는 못하지만 그 클래스를 상속할 수 있다.

추상 메서드
구현이 되어 있지 않은 메서드
추상 메서드가 있다면 추상 클래스를 상속받는 클래스에서 추상 메서드를 구현해야한다.
```typescript
// call signatuer만 가지고 있다.
abstract getNickName():void
```

private
클래스 밖에서 접근 X, 자식 클래스에서 접근 X

protected
외부로부터 보호되지만 다른 자식클래스에서는 사용되길 원한다면 
