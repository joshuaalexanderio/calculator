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

clear.addEventListener("click", function clearNumbers() {
    display.innerHTML = "";
});
