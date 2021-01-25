let unknownUserInput: unknown;
let anyUserInput: any;
let userName: string;

unknownUserInput = 5;
unknownUserInput = 'SomeString'

anyUserInput = 10;
anyUserInput = 'AnotherString'

userName = anyUserInput

if (typeof unknownUserInput === 'string') {
  userName = unknownUserInput
}

function generateError(msg: string, code: number): never {
  throw { message: msg, errorCode: code };
}

generateError(userName, 500);