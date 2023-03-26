let mainNum  = '';
let secondNum ='';
let operator = ''; 
    

document.addEventListener("DOMContentLoaded", function () {
    let numbers = document.querySelectorAll(".number")
    let operators = document.querySelectorAll(".operator")
    
    let clear = document.querySelector('.clear')
    let decimal = document.querySelector('.decimal')
    let equal = document.querySelector('.equal')
    
    let main = document.querySelector('.main-number')
    let second = document.querySelector('.second-number')
    
    numbers.forEach((number) => number.addEventListener('click', function (e) {
        handelNumber(e.target.textContent)
        main.textContent = mainNum
    }))

    operators.forEach((opera) => opera.addEventListener('click', function (e) {
        handelOperator(e.target.textContent)
        second.textContent = secondNum + "" + operator;
        main.textContent = mainNum;
    }))

    clear.addEventListener("click", function(){
        secondNum = " ";
        mainNum = " ";
        operator = " ";
        second.textContent = mainNum
        main.textContent = mainNum;
    })


    equal.addEventListener('click', function () {
        if (mainNum != "" && secondNum != "") {
            calculate();
            second.textContent = '';
            if (secondNum.length <= 5) {
                main.textContent = secondNum
            } else {
                main.textContent = secondNum.slice(0, 5) + ".."
            }
        } 
    })

    decimal.addEventListener("click", () => {
        addDecimal();
    })

});

function handelNumber(num) {
    if (mainNum.length<=7) {
        mainNum += num
    }
}

function handelOperator(opera) {
    operator = opera;
    secondNum = mainNum;
    mainNum=''
}

function calculate(){
    secondNum = Number(secondNum)
    mainNum = Number(mainNum)
    if (operator === "+") {
        secondNum += mainNum
    } else if (operator === "-") {
        secondNum -=mainNum
    }else if (operator === "x") {
        secondNum *=mainNum
    }
    else if (operator === "÷") {
        secondNum /=mainNum
    }
    secondNum = secondNum.toString();
    mainNum = mainNum.toString();
}

function addDecimal() {
    if (!mainNum.includes('.')) {
        mainNum += "."
    }
}



