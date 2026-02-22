// CALLING VARIABLES
let currentNumber = "0";
let previousNumber = "0";
let currentOperator = "";

// UPDATING RESULTS
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

// ALL OPERATORS
function setOperator(operator){
    previousNumber = currentNumber;
    currentOperator = operator;
    currentNumber = "0";

    updateResult();
}

// CALCULATING ALL OPERATIONS
function calculate(){
    let previous = parseFloat(previousNumber);
    let current = parseFloat(currentNumber);

    if(currentOperator == "+"){
        currentNumber = (previous + current);
    }else if(currentOperator == "-"){
        currentNumber = (previous - current);
    }else if(currentOperator == "*"){
        currentNumber = (previous * current);
    }else if(currentOperator == "/"){
        currentNumber = (previous / current);
    }

    updateResult();
}

// CLEAR ALL
function clearAll(){
    currentNumber = "0";
    previousNumber = "0";
    currentOperator = "";

    updateResult();
}

// DECIMAL
function decimal(){
    if(!currentNumber.includes(".")){
        currentNumber += (".");
    }

    updateResult();
}

// PERCENTAGE
function percent(){
    currentNumber = Number(currentNumber / "100");

    updateResult();
}

// TOGGLESIGN
function toggleSign(){
    currentNumber = Number(currentNumber * "-1");

    updateResult();
}

// TIMER
setInterval(timer, 1000);
function timer(){
    let today = new Date();
    let time = today.toLocaleTimeString();

    document.getElementById("showtimer").textContent = time;
}

// GREETING
function greet(){
    let currentDay = new Date();
    let hour = currentDay.getHours();
    let name = prompt("Kindly input your name.");

    if(hour >= 0 && hour < 12){
        document.getElementById("greeting").textContent = `Good Morning ${name}.`;
    }else if(hour >=12 && hour < 16){
        document.getElementById("greeting").textContent = `Good Afternoon ${name}.`;
    }else{
        document.getElementById("greeting").textContent = `Good Evening ${name}.`;
    }
}

