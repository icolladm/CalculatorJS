let operatorSelected = ''
let lastOperation = 0
let currentOperation = ''
let resultSolution = 0
let haveDot = false
const addButton = document.getElementById('operatorAdd')
const numberButton = document.querySelectorAll('.numberButton')
const operation = document.getElementsByClassName('operation')
const operatorButton = document.querySelectorAll('.operatorButton')
const resultButton = document.getElementById('resultButton')
const resultText = document.getElementsByClassName('result')
const clearButton = document.getElementsByClassName('clear')
const delButton =   document.getElementsByClassName('delete')

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
        if ((operation[0].innerHTML != '0') || (operation[0].innerHTML == '0' &&  button.innerHTML == '.' && haveDot == false) ){
            currentOperation += button.innerHTML
            operation[0].innerHTML += button.innerHTML
            if (button.innerHTML == '.') {haveDot = true}
        }
        else{
            currentOperation = button.innerHTML
            operation[0].innerHTML = button.innerHTML
        }
    })
})



const operate = (num1, num2, operator) => {
    operationResult = 0
    switch (operator) {
        case '+':
            operationResult = addFunction(num1, num2)
            break;
        case '-':
            operationResult = subtractFunction(num1, num2)
            break;
        case '*':
            operationResult = multiplyFunction(num1, num2)
            break;
        case '/':
            operationResult = divideFunction(num1,num2)
    }

    return operationResult
} 

operatorButton.forEach((button) =>{
    button.addEventListener('click', () => {
        if (operatorSelected === ''){
            operatorSelected = button.innerHTML
            operation[0].innerHTML += operatorSelected
        }
        if (resultSolution !== 0){
            operatorSelected = button.innerHTML
            resultText[0].innerHTML = operate(parseInt(resultSolution), parseInt(currentOperation), operatorSelected)
            resultSolution = resultText[0].innerHTML
            operation[0].innerHTML = 0
        }
    })
})

function ShowResult(){
    let nums = operation[0].innerHTML.split(operatorSelected)
    resultText[0].innerHTML = operate(parseInt(nums[0]),parseInt(nums[1]), operatorSelected)
    resultSolution = resultText[0].innerHTML
    operation[0].innerHTML = 0
}

resultButton.addEventListener('click', ShowResult)

clearButton[0].addEventListener('click', () => {
    operatorSelected = ''
    lastOperation = 0
    currentOperation = ''
    resultSolution = 0
    operation[0].innerHTML = 0
    resultText[0].innerHTML = ''
})

delButton[0].addEventListener('click', () => {
    operation[0].innerHTML = operation[0].innerHTML.slice(0, -1)
})