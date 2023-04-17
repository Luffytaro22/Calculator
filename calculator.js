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
let auxiliarOutput = "";
buttons.forEach((button) => button.addEventListener('click', () =>{
    if(parseFloat(button.value) || button.value === "0" || button.value === "."){
        output.value = output.value.concat(button.value);
    }else{
        numbers.push(Number(output.value.replace(auxiliarOutput, "")));
        output.value = output.value.concat(button.value);
        auxiliarOutput = output.value;
    }
    console.log(numbers)
}));

function operate(operator, firstNumber, secondNumber){
    switch(operator){
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return substract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
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