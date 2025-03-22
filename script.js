let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.calculator__button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                string = eval(string);
                document.getElementById('display').value = string;
            } catch (error) {
                document.getElementById('display').value = 'Syntax Error';
                string = "";
            }
        } else if (buttonText === 'AC') {
            string = "";
            document.getElementById('display').value = string;
        } else if (buttonText === 'M+') {
            try {
                memory += eval(string);
            } catch (error) {
                document.getElementById('display').value = 'Syntax Error';
            }
            string = "";
            document.getElementById('display').value = string;
        } else if (buttonText === 'M-') {
            try {
                memory -= eval(string);
            } catch (error) {
                document.getElementById('display').value = 'Syntax Error';
            }
            string = "";
            document.getElementById('display').value = string;
        } else {
            string += buttonText;
            document.getElementById('display').value = string;
        }
    });
});