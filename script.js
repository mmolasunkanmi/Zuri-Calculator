const displayField = document.getElementById('display-field');
const numBtn = document.querySelectorAll(".num");
const buttonOpr = document.querySelectorAll(".cal");
const clear = document.getElementById("clear");
const equalBtn = document.getElementById("equal-btn");

document.addEventListener('DOMContentLoaded', function() {
    numBtn.forEach(button => {
        button.addEventListener('click', () => {
            displayField.value += button.textContent;
        });
    });

    buttonOpr.forEach(button => {
        button.addEventListener('click', () => {
            if(button.textContent === '÷') {
                displayField.value += '/';
            } else {
                displayField.value += button.textContent;
            }
        });
    });

    equalBtn.addEventListener('click', () => {
        try {
            const result = eval(displayField.value.replace(/[^0-9+/*-.]/g, ""));
            displayField.value = result;
        } catch (error) {
            displayField.value = 'Error';
        }
    });

    clear.addEventListener('click', () => {
        displayField.value = '';
    });
});