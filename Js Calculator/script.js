// Step 1 : take an operator
// + for addition, - for subtraction, * for multiplication, / for division
const operator = prompt(' Enter operator (either +, -, / or *):');

//  step 2: take in input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

//step 3: use if and else to call the result and operator

if (operator == '+'){
      result = number1 + number2;
}else if( operator == '-'){
      result = number1 - number2;
}else if( operator == '*'){
      result = number1 * number2;
}else if( operator == '/'){
      result = number1 / number2;
}
//display result
console.log(result);
alert(result);

