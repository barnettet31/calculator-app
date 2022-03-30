const numbers = document.querySelectorAll(".number-js");
const operands = document.querySelectorAll(".operand-js");
const deleteButton = document.querySelector("button[value='Delete']");
const equalButton = document.querySelector("button[value='=']");
const resetButton = document.querySelector("button[value='Reset']");
const decimalButton = document.querySelector('button[value="."]');
const screenNumber = document.querySelector("#current-number");

function createBindedVariable(propertyName, targetID) {
  let newValue = 0;
  Object.defineProperty(window, propertyName, {
    set: function (value) {
      newValue = value;
      let targetRef = document.getElementById(targetID);
      targetRef.innerText = value;
    },
    get: function () {
      return newValue;
    },
  });
}
createBindedVariable("current", "current-number");
window.current = 0;
class Calculator {
  constrcutor(curentNumber) {
    this.currentNumber = curentNumber;
  }
  handleNumber(value) {
    console.log(this.currentNumber);
    if (this.currentNumber === "0") {
      this.currentNumber = value;
      this.updateDisplay();
    }
    if (value === "0" && this.currentNumber === "0") return;
    // this.updateDisplay();
  }
  updateDisplay() {
    window.current = this.currentNumber;
  }
}
const calculator = new Calculator(window.current);
const handleNumber = (number) => {
  calculator.handleNumber(number);
};
const handleOperand = (operand) => {
  console.log(operand);
};
const handleReset = () => {
  handleDisplayUpdate();
};
const handleDelete = () => {};

const handleEqual = (equal) => {
  console.log(equal);
};
const handleDecimal = (dec) => {
  console.log(dec);
};
numbers.forEach((number) => {
  number.addEventListener("click", (e) => handleNumber(e.target.value));
});
operands.forEach((operand) => {
  operand.addEventListener("click", (e) => handleNumber(e.target.value));
});
resetButton.addEventListener("click", handleReset);
equalButton.addEventListener("click", (e) => handleEqual(e.target.value));
decimalButton.addEventListener("click", (e) => handleDecimal(e.target.value));
deleteButton.addEventListener("click", handleDelete);

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
