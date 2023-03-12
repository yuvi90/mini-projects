const inputText = document.querySelector(".input");
const resetBtn = document.querySelector("[data-reset]");
const numBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");

let prevInput = 0;
let currentInput = 0;
let ActiveOperation = false;

resetBtn.addEventListener('click', () => {
    inputText.innerText = 0;
})

numBtn.forEach((num) => {
    num.addEventListener('click', () => {
        if (inputText.innerText == 0) {
            inputText.innerText = num.innerText;
        } else {
            if (inputText.innerText.length < 10)
                inputText.innerText += num.innerText;
        }
    })
})

operatorBtn.forEach((operator) => {
    operator.addEventListener('click', () => {
        // if (isActiveOperation) {
        //     if(isActiveOperation == '+') {
        //         let result = Number(inputText.innerText) + prevInput;
        //         inputText.innerText = result;
        //     }
        //     isActiveOperation = '';
        // } else {
        //     prevInput = Number(inputText.innerText);
        //     inputText.innerText = '0';
        //     isActiveOperation = operator.innerText;
        // }
        prevInput = inputText.innerText;
        inputText.innerText = '0';
        let result = compute(operator.innerText, Number(prevInput), Number(currentInput));
        console.log(result);

    })
})

function compute(operator, input1, input2) {
    switch (operator) {
        case '+':
            return input1 + input2;
        case '-':
            return input1 - input2;
        case '*':
            return input1 * input2;
        case '/':
            return input1 / input2;
        default:
            return;
    }
}