'use strict';


class Calculator{
    constructor(previousOperandText,currentOperandText){
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    }

    clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){

    }

    chooseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){

    }
}



const numberButtons =  document.querySelectorAll('[data-number]');
const operationButton =  document.querySelectorAll('[data-operation]');
const equalsButton =  document.querySelector('[data-equals]');
const deleteButton =  document.querySelector('[data-delete]');
const allClearButton =  document.querySelector('[data-all-clear]');
const previousOperandText =  document.querySelector('[data-previous-operand]');
const currentOperandText =  document.querySelector('[data-current-operand]');


const Calculator = new Calculator(previousOperandText, currentOperandText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        Calculator.appendNumber(button.innerText)
        Calculator.updateDisplay()
    })
})