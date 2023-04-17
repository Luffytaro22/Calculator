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
let result;
buttons.forEach((button) => button.addEventListener('click', () =>{
    if(button.value === "ce"){
        output.value = output.value.substring(0, output.value.length-1);
        numbers.pop();
    }
    if(parseFloat(button.value) || button.value === "0" || button.value === "."){
        output.value = output.value.concat(button.value);
    }else {
        if(button.value === "ce" || button.value === "clear"){
            output.value = output.value;
        }else{
            operators.push(button.value);
            numbers.push(Number(output.value.replace(auxiliarOutput, "")));
            output.value = output.value.concat(button.value);
            auxiliarOutput = output.value;
            if(numbers.length >= 2){
                result = operate(operators[0], numbers[0], numbers[1]);
                numbers.shift();
                numbers.shift();
                numbers.unshift(result);
                operators.shift();
            }
            if(button.value === "="){
                output.value = numbers[0]; return;
            }
        }
        
    }
    
}));

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