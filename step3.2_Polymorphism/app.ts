type SuperPrint = {
  // (arr: number[]): void
  // (arr: boolean[]): void
  // (arr: string[]): void
  // (arr: (number|boolean)[]):void
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
}

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach(i => console.log(i))
// }

const superPrint = (arr) => arr[0]

const a = superPrint([1, 2, 3, 4])
const b = superPrint([true, false, true])
const c = superPrint(["a", "b", "c"])
const d = superPrint(["a", true, 1])
