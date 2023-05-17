const display = document.querySelector('.display');
const clear = document.querySelector('.clear')
const cancel = document.querySelector('.cancel')
const operator = document.querySelector('.divide')
const multiply = document.querySelector('.multiply')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const equals = document.querySelector('.equals')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const numberButtons = document.querySelectorAll('.digit')
let operand1;
let operand2;
let operation;
let result;
clear.addEventListener("click", function clearNumbers() {
    display.innerHTML = "";
    operand1 = "";
    operand2 = "";
    operation = "";
    result = ""
});
cancel.addEventListener("click", function deleteDigit() {
    display.innerHTML = display.innerHTML.slice(0, -1);

})
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function inputNumber() {
        display.innerHTML = display.innerHTML.concat(`${numberButtons[i].innerHTML}`);
    })
}

// TODO: change this listener function so that it highlights the operation and doesn't remove operand1 until you've started entering operand2
plus.addEventListener("click", function add() {
    operand1 = Number(display.innerHTML);
    operation = "+";
    display.innerHTML = "";
    
});

// TODO: change this listener function so that it does not rely on eval, which is a security vulnerability, as it allows the user to run arbitrary code
equals.addEventListener("click", function evaluate() {
    result = eval(`${operand1} + ${operation} + ${display.innerHTML}`);
    display.innerHTML = result;
});