const parentDiv = document.getElementById('container');
const buttons = parentDiv.querySelectorAll('button');
const arrayOfNumbers = [];
const arrayToCalculate = [];
const arrayOfOperators = ['+', '-', '%'];

// For loop to check for numbers and put them in an array
for (let i = 0; i < buttons.length; i++) {
    const buttonValue = parseInt(buttons[i].value);
    if (!isNaN(buttonValue)) {
        arrayOfNumbers.push(buttonValue);
    }
}

// For loop to add click event listeners to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        console.log("Button clicked at index:", i);
        const buttonValue = parseInt(buttons[i].value);
        if (!isNaN(buttonValue)) {
            arrayToCalculate.push(buttonValue);
            return buttonValue;
        }
        else if (arrayOfOperators.includes(buttonValue)) {
            // Handle operator buttons
            performCalculation(buttonValue);
        }

    });
}

function performCalculation(operator) {
    // Perform calculations based on the operator and values in arrayToCalculate
    const result = eval(arrayToCalculate.join(' '));
    console.log('Result:', result);
    // Clear the array for the next calculation
    arrayToCalculate.length = 0;
    arrayToCalculate.push(result);
}


