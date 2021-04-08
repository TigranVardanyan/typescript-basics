let userInput: unknown;
let userName: string;
let userInputAny: any;

userInput = 5;
userInput = 'Max';
// userName = userInput; // Type 'unknown' is not assignable to type 'string'.
userName = userInputAny;

function generateError(message: string, code: number): never {
    throw {message:message, errorCode: code};
}

generateError("An error occurred!", 500)