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
  constrcutor(curentNumber = 0) {
    this.currentNumber = curentNumber;
    this.operation = undefined;
    this.previous = undefined;
  }

  handleNumber(value) {
    if (!this.currentNumber && value === "0") return;
    if (this.currentNumber) this.currentNumber += value;
    if (!this.currentNumber) this.currentNumber = value;
    this.updateDisplay();
  }
  handleDecimal() {
    if (this.currentNumber.toString().includes(".")) return;
    this.currentNumber += ".";
    this.updateDisplay();
  }
  updateDisplay() {
    window.current = this.currentNumber;
  }
  chooseOperation(value) {
    this.operation = value;
    if (!this.previous) {
      this.previous = this.currentNumber;

      this.currentNumber = 0;

      this.updateDisplay();
    }
  }
  compute() {
    let computation;
    const previous = parseFloat(this.previous);
    const current = parseFloat(this.currentNumber);
    if (isNaN(previous) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = previous + current;
        break;
      case "-":
        computation = previous - current;
        break;
      case "/":
        computation = previous / current;
        break;
      case "x":
        computation = previous * current;

        break;
      default:
        return;
    }
    this.currentNumber = computation;
    this.operation = undefined;
    this.previous = undefined;
    this.updateDisplay();
  }
  delete() {
    if (this.currentNumber.charAt(-1) === ".") return console.log("decimal");
    if (this.currentNumber.length >= 2) {
      this.currentNumber = this.currentNumber.toString().slice(0, -1);
    } else {
      console.log("test");
      this.currentNumber = 0;
    }
    this.updateDisplay();
  }
  clear() {
    this.currentNumber = 0;

    this.updateDisplay();
  }
}
const calculator = new Calculator(window.current);
const handleNumber = (number) => {
  calculator.handleNumber(number);
};
const handleOperand = (operand) => {
  calculator.chooseOperation(operand);
};
const handleReset = () => {
  calculator.clear();
};
const handleDelete = () => {
  calculator.delete();
};

const handleEqual = (equal) => {
  calculator.compute();
};
const handleDecimal = (dec) => {
  calculator.handleDecimal();
};
numbers.forEach((number) => {
  number.addEventListener("click", (e) => handleNumber(e.target.value));
});
operands.forEach((operand) => {
  operand.addEventListener("click", (e) => handleOperand(e.target.value));
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
