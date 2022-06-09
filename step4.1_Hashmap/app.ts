// 새로운 타입 Words를 만든다.
type Words = {
  [key: string]: string // key=> string, property=>string
  //property의 이름은 모르지만 type은 알고있을 때 사용한다.
}

let dict: Words = {
  "potato": "food"
  // 1 : "apple" (error)
}

class Dict {
  private words: Words
  constructor() {
    this.words = {}
  }
  add(word:Word) {
    if(this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term:string) {
    return this.words[term]
  }
}

class Word {
  constructor(
      public term: string,
      public def: string
  ) {
  }
}

const kimchi = new Word("Galbi", "한국의 음식");

const dict = new Dict();
dict.add(kimchi);
dict.def("Galbi");