const buttons=document.querySelectorAll(".aa");
const display=document.querySelector(".firstchoice");
const lastchoice=document.querySelector(".lastchoice");

let num1;
let num2;
let operator;

function last() {
    num1=parseFloat(display.innerHTML);
    num2=parseFloat(lastchoice.innerHTML);
}

function calculate() {
    switch (operator) {
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '÷':
            return num1/num2;
        default:
            break;
    }
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
            let result=calculate();
            console.log(result);
        }
        else if(isNaN(button.innerHTML)){
            if(button.innerHTML=='.' && !display.innerHTML.includes('.')){
                display.innerHTML+=button.innerHTML; 
            }
            else{
                operator=button.innerHTML;
                lastchoice.innerHTML=display.innerHTML;
                last();
            }
        }
        else{
            display.innerHTML+=button.innerHTML;   
        }  
    });
});