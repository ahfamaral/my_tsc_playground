
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric

type A = {
  a: string;
}
type B = {
  b: string;
}

type unionType = A & B

const objectC: unionType = {
  a: 'a value',
  b: 'b value',
}

type unknownType = A | B

function printUnknownInformation(obj: unknownType) {
  if ('a' in obj) {
    console.log(obj.a)
  }
  if ('b' in obj) {
  console.log(obj.b)
  }
}

const myObj: unknownType = {
  a: 'AAAA',
  b: 'BBB'
}

printUnknownInformation(myObj)