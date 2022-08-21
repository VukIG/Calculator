const redarmy=document.querySelectorAll(".aa");
const display=document.querySelector(".display");
const lastchoice=document.querySelector(".lastchoice");



redarmy.forEach(element => {
    let button=element;
    button.addEventListener("click",function () {
        if(button.innerHTML=='+' || button.innerHTML=='-' || button.innerHTML=='*' || button.innerHTML=='÷' || button.innerHTML=='*' || button.innerHTML=='%'){
            console.log(button.innerHTML)
            lastchoice.innerHTML=button.innerHTML;
        }
        else{
            display.innerHTML+=button.innerHTML;   
        }  
    })
});