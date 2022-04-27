let operatorSelected = ''
let lastOperation = 0
let currentOperation = ''
const addButton = document.getElementById('operatorAdd')
const numberButton = document.querySelectorAll('.numberButton')
const operation = document.getElementsByClassName('operation')
const operatorButton = document.querySelectorAll('.operatorButton')

const addFunction = (num1, num2 ) => {
    return num1 + num2
} 

const subtractFunction = (num1, num2) => {
    return num1 - num2
}

const multiplyFunction = (num1, num2) => {
    return num1 * num2
}

const divideFunction = (num1, num2) => {
    return num1 / num2
} 

numberButton.forEach((button) => {
    button.addEventListener('click', () => {
        if ((operation[0].innerHTML != '0') || (operation[0].innerHTML == '0' &&  button.innerHTML == '.') ){
            currentOperation += button.innerHTML
            operation[0].innerHTML += button.innerHTML
        }
        else{
            currentOperation = button.innerHTML
            operation[0].innerHTML = button.innerHTML
        }
    })
})

operatorButton.forEach((button) =>{
    button.addEventListener('click', () => {
        if (operatorSelected === ''){
            operatorSelected = button.innerHTML
            operation[0].innerHTML += operatorSelected
        }
    })
})