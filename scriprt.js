const input = document.getElementById('display');

function cliCk(a) {
    input.value = input.value + a;
}

function cleaR() {
    input.value = "";
}

function calCulate() {
    input.value = eval(input.value);
}

function deLete() {
    input.value = input.value.slice(0, -1);
}

document.addEventListener('DOMContentLoaded', () => 
{
    const button1 = document.getElementById("1");
    const button2 = document.getElementById("2");
    const button3 = document.getElementById("3");
    const button4 = document.getElementById("4");
    const button5 = document.getElementById("5");
    const button6 = document.getElementById("6");
    const button7 = document.getElementById("7");
    const button8 = document.getElementById("8");
    const button9 = document.getElementById("9");
    const button10 = document.getElementById("0");
    const button11 = document.getElementById("c");
    const button12 = document.getElementById("+");
    const button13 = document.getElementById("-");
    const button14 = document.getElementById("*");
    const button15 = document.getElementById("/");
    const button16 = document.getElementById(".");
    const button17 = document.getElementById("=");
    const button18 = document.getElementById("del")

    document.addEventListener('keydown', (event) => 
        {
            if (event.key === '1') {
                event.preventDefault();
                button1.click();
            }else if (event.key === '2') {
                event.preventDefault();
                button2.click();
            }else if (event.key === '3') {
                event.preventDefault();
                button3.click();
            }else if (event.key === '4') {
                event.preventDefault();
                button4.click();
            }else if (event.key === '5') {
                event.preventDefault();
                button5.click();
            }else if (event.key === '6') {
                event.preventDefault();
                button6.click();
            }else if (event.key === '7') {
                event.preventDefault();
                button7.click();
            }else if (event.key === '8') {
                event.preventDefault();
                button8.click();
            }else if (event.key === '9') {
                event.preventDefault();
                button9.click();
            }else if (event.key === '0') {
                event.preventDefault();
                button10.click();
            }else if (event.key === 'c' || event.key === 'C') {
                event.preventDefault();
                button11.click();
            }else if (event.key === '+') {
                event.preventDefault();
                button12.click();
            }else if (event.key === '-') {
                event.preventDefault();
                button13.click();
            }else if (event.key === '*') {
                event.preventDefault();
                button14.click();
            }else if (event.key === '/') {
                event.preventDefault();
                button15.click();
            }else if (event.key === '.') {
                event.preventDefault();
                button16.click();
            }else if (event.key === '=' || event.key =='Enter') {
                if (input.value === ""){
                    null
                }else{
                event.preventDefault();
                button17.click();
                }
            }else if (event.key === 'Backspace'){
                event.preventDefault();
                button18.click();
            }
        });
});