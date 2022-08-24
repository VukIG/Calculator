const redarmy=document.querySelectorAll(".aa");
const display=document.querySelector(".display");
const lastchoice=document.querySelector(".lastchoice");

let num1;
let num2;


function calculate(params) {
    switch (params) {
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


redarmy.forEach(element => {
    let button=element;
    button.addEventListener("click",function () {
        if (button.innerHTML=='AC'){
            lastchoice.innerHTML='';
            display.innerHTML='';
        }
        if(button.innerHTML=='='){
            let result=calculate();
            console.log(result);
        }
        else if(button.innerHTML=='+' || button.innerHTML=='-' || button.innerHTML=='*' || button.innerHTML=='÷' || button.innerHTML=='*' || button.innerHTML=='%'){
            
            num1=parseFloat(display.innerHTML);
            console.log(num1);
            display.innerHTML+=button.innerHTML;
        }
        else{
            display.innerHTML+=button.innerHTML;   
        }  
    });
});