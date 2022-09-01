const buttons=document.querySelectorAll(".aa");
const display=document.querySelector(".firstchoice");
const lastchoice=document.querySelector(".lastchoice");

let num1;
let num2;
let operator;
let result;

function calculate(operator) {
    num2=parseFloat(display.innerHTML);
    num1=parseFloat(lastchoice.innerHTML);
    switch (operator) {
        case '+':
            result=num1+num2;
        case '-':
            result=num1-num2;
        case '*':
            result=num1*num2;
        case '÷':
            result=num1/num2;
        default:
            break;
    }
    display.innerHTML=result;
    lastchoice.innerHTML='';
}


buttons.forEach(button => {
    button.addEventListener("click",function () {
        if (button.innerHTML=='AC'){
            lastchoice.innerHTML='';
            display.innerHTML='';
            operator='';
            num1=0;
            num2=0;
        }
        else if(button.innerHTML=='C'){
            let slic=display.innerHTML;
            display.innerHTML=slic.slice(0,slic.length-1);
        }
        else if(button.innerHTML=='='){
            calculate(operator);
        }
        else if(isNaN(button.innerHTML)){
            if(button.innerHTML=='.' && !display.innerHTML.includes('.')){
                display.innerHTML+=button.innerHTML; 
            }
            else if(button.innerHTML=='.' && display.innerHTML.includes('.')){
                return;
            }
            else{
                operator=button.innerHTML;
                lastchoice.innerHTML=display.innerHTML;
                display.innerHTML='';
            }
        }
        else{
            display.innerHTML+=button.innerHTML;   
        }  
    });
});