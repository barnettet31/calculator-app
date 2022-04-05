const keyboard = document.querySelector(".keyboard");
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
    console.log("this is being fired");
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
    if (this.currentNumber.charAt(-1) === ".") return;
    if (this.currentNumber.length >= 2) {
      this.currentNumber = this.currentNumber.toString().slice(0, -1);
    } else {
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

keyboard.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("button")) {
    const buttonValue = e.target.value;
    switch (buttonValue) {
      case "7":
      case "8":
      case "9":
      case "4":
      case "5":
      case "6":
      case "1":
      case "2":
      case "3":
      case "0":
        calculator.handleNumber(buttonValue);
        break;
      case ".":
        calculator.handleDecimal();
        break;
      case "=":
        calculator.compute();
        break;
      case "Reset":
        calculator.clear();
        break;
      case "Delete":
        calculator.delete();
        break;
      case "+":
      case "-":
      case "/":
      case "x":
        calculator.chooseOperation(buttonValue);
        break;
      default:
        break;
    }
  }
});
