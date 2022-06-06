class Players {
  constructor(
      private firstName: string, // == this.firstName = firstName;
      private lastName: string,
      public nickname: string
  ) {
  }

  // 기존의 javascript 형식
  // constructor(firstName, lastName) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  // }
}

// 추상 클래스 User
abstract class User {
  constructor(
      private firstName: string,
      private lastName: string,
      public nickname: string
  ) {
  }
  getFullName () {
    return `${this.firstName} ${this.lastName}`
  }
}

// User를 상속받은 Player
class Player extends User {
}

// Player의 instance
const jeon = new Player("yeoreum", "jeon", "여름");
jeon.getFullName();