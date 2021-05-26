// 1. Make a variable and assign an even number to that variable. Make sure that variable cannot be changed.

const evenNum = 44;

// 2. Make a variable and assign a negative odd number to that variable. Make sure that variable cannot be changed.

const negOddNum = -13;

// 3. Make a variable and assign a string to that variable using double quotes. Make sure that variable cannot be changed.

const strDoubleQuotes = "I like bananas!";

// 4. Make a variable and assign a string to that variable using single quotes. Make sure that variable cannot be changed.

const strSingleQuotes = 'I hate liver paté!';

// 5. Make a variable and assign a string to that variable using a template literal. Make sure that variable cannot be changed.

const strTempLiteral = `There are things I like, for example ${strDoubleQuotes} And some things I really don't like, for instance ${strSingleQuotes}`;

// 6. Make a variable and assign an empty string to that variable using a template literal. Make sure that variable *can* be changed.

let emptyStringTempLiteral = ``;

// 7. Make a variable and assign a boolean to that variable using a template literal. Make sure that variable *can* be changed.

let boolTempLiteral = Boolean(`true`);

// 8. Make a variable and assign a boolean to that variable using a template literal. Make sure that variable can not be changed.

const secondBoolTempLiteral = Boolean(`false`);

// 9. Print the `type` of a variable that has a number value.

console.log(typeof negOddNum);

// 10. Print the `type` of a variable that has a string value.

console.log(typeof emptyStringTempLiteral);

// 11. Print the `type` of a variable that has a boolean value.

console.log(typeof boolTempLiteral);
