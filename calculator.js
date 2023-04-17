let firstNumber;
let operator;
let secondNumber;
let buttonNumbers = document.querySelectorAll('.buttonNumbers');
let buttonOperators = document.querySelectorAll('.buttonOperators');
let clear = document.querySelector('#clear');
let ce = document.querySelector('#ce');
let output = document.querySelector('output');
let buttons = document.querySelectorAll('button');
let numbers = [];
let operators = [];
let auxiliarOutput = "";
let result, last;

function reload(){
    output.value = "";
    numbers = [];
    operators = [];
    buttons.forEach((button) => button.addEventListener('click', handler));
}

function buttonClickHandler(button) {
    if (button.value === "ce") {
      last = output.value.charAt(output.value.length - 1);
      if (parseFloat(last) || last === "0" || last === ".") {
        numbers[numbers.length - 1] = Math.floor(numbers[numbers.length - 1] / 10);
        if (numbers[numbers.length - 1] == 0) {
          numbers.pop();
        }
      } else {
        operators.pop();
      }
      output.value = output.value.substring(0, output.value.length - 1);
    }
    if (parseFloat(button.value) || button.value === "0" || button.value === ".") {
      output.value = output.value.concat(button.value);
    } else {
      if (button.value === "ce" || button.value === "clear") {
        output.value = output.value;
      } else {
        operators.push(button.value);
        numbers.push(Number(output.value.replace(auxiliarOutput, "")));
        output.value = output.value.concat(button.value);
        auxiliarOutput = output.value;
        if (numbers.length >= 2) {
          result = operate(operators[0], numbers[0], numbers[1]);
          numbers.shift();
          numbers.shift();
          numbers.unshift(result);
          operators.shift();
        }
        if (button.value === "=") {
          output.value = numbers[0];
          buttons.forEach((button) => button.removeEventListener('click', handler));
        }
      }
    }
  }
  
  function handler(event) {
    buttonClickHandler(event.target);
  }
  
  buttons.forEach((button) => button.addEventListener('click', handler));
  clear.addEventListener('click', reload);

function operate(operator, firstNumber, secondNumber){
    switch(operator){
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return substract(firstNumber, secondNumber);
        case "x":
            return multiply(firstNumber, secondNumber);
        case "÷":
            return divide(firstNumber, secondNumber);
        
    }

}
function add(n1, n2){
    return n1 + n2;
}

function substract(n1, n2){
    return n1 - n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    return n1 / n2;
}