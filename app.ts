let userInput: unknown;
let userName: string;
let userInputAny: any;

userInput = 5;
userInput = 'Max';
// userName = userInput; // Type 'unknown' is not assignable to type 'string'.
userName = userInputAny;