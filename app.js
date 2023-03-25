let mainNum  = '';
let secondNum ='';
let operator = ''; 
    

document.addEventListener("DOMContentLoaded", function () {
    let  numbers = document.querySelectorAll(".number")
    let operators = document.querySelectorAll(".operator")
    
    let  clearBtn = document.querySelector('.clear')
    let  decimal = document.querySelector('.decimal')
    let equal = document.querySelector('.equal')
    
    let  main = document.querySelector('.main-number')
    let second = document.querySelector('.second-number')
    
    numbers.forEach((number) => number.addEventListener('click', function (e) {
        handelNumber(e.target.textContent)
    }))
})

function handelNumber(num) {
    console.log(num);
}
