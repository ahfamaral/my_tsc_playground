function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printMyResult(n: number): void {
  console.log('Result: ', n);
}

function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printMyResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(10, 11))

addAndHandle(10, 20, (res) => {
  console.log('cb calling arguments:', res)
})