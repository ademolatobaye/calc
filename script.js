// CALLING VARIABLES
let currentNumber = "0";
let previousNumber = "0";
let currentOperator = "";

// DISPLAY RESULT
function updateResult(){
    document.getElementById("update").textContent = currentNumber;
}

// ALL DIGITS
function setDigit(digit){
    if(currentNumber == "0"){
        currentNumber = digit;
    }else{
        currentNumber += digit;
    }

    updateResult();
}

// OPERATORS
function setOperator(operator){
    previousNumber = currentNumber;
    currentOperator = operator;
    currentNumber = "0";

    updateResult();
}



// CALCULATE ALL INPUTS
function calculate(){
    let previous = parseFloat(previousNumber);
    let current = parseFloat(currentNumber);

    if(currentOperator == "+"){
        currentNumber = (previous + current);
    }else if(currentOperator == "-"){
        currentNumber = (previous + current);
    }else if(currentOperator == "/"){
        currentNumber = (previous / current);
    }else if(currentOperator == "*"){
        currentNumber = (previous * current);
    }

    updateResult();
}


// DECIMAL
function decimal(){
    if(!currentNumber.includes(".")){
        currentNumber += (".");
    }

    updateResult();
}


// TOOGGLESIGN
function toggleSign(){
    currentNumber = (currentNumber * Number("-1"));

    updateResult();
}


// PERCENTAGE
function percent(){
    currentNumber = (currentNumber / Number("100"));

    updateResult();
}


// CLEAR ALL
function clearAll(){
    currentNumber = "0";
    previousNumber = "";
    currentOperator = "";

    updateResult();
}


// TIMER
setInterval(setTimer, 1000);

function setTimer(){
    let today = new Date();
    let time = today.toLocaleTimeString();

    document.getElementById("showtimer").textContent = time;
}


// GREETING
function greet(){
    let thisDay = new Date();
    let hour = thisDay.getHours();
    let name = prompt("Kindly input your name.");

    if(hour >= 0 && hour < 12){
        document.getElementById("greeting").textContent = `Good Morning ${name}.`;
    }else if(hour >= 12 && hour < 16){
        document.getElementById("greeting").textContent = `Good Afternoon ${name}.`;
    }else{
        document.getElementById("greeting").textContent = `Good Evening ${name}.`;
    }
}
