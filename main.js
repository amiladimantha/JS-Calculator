const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
const calculate = (num1, oprt, num2) => {
    let result = ''
    if(oprt ===  'add'){
        result = parseFloat(num1) + parseFloat(num2)
    }else if(oprt === 'subtract'){
        result = parseFloat(num1) - parseFloat(num2)
    }else if(oprt === 'multiply'){
        result = parseFloat(num1) * parseFloat(num2)
    }else if(oprt === 'divide'){
        result = parseFloat(num1) / parseFloat(num2)
    }

    return result
}

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operator = action
    }

    if (action === "decimal") {
      display.textContent = displayedNum + ".";
    }

    if (action === "clear") {
      console.log("clear key!");
    }

    if (action === "calculate") {
        const firstValue = calculator.dataset.firstValue
        console.log("first value" + JSON.stringify(firstValue))
        const operator = calculator.dataset.operator
        console.log("oprt" + JSON.stringify(operator))
        const secondValue = displayedNum
        console.log("second value" + JSON.stringify(secondValue))

        display.textContent = calculate(firstValue, operator, secondValue)
    }

    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );
  }
});
