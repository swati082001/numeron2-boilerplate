// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let timer = document.getElementById("timer");

let random1 = Math.floor(Math.random()*101);
let random2 = Math.floor(Math.random()*101);

num1.innerText = random1;
num2.innerText = random2;

// Iteration 3: Creating variables required to make the game functional

let plus =document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply=  document.getElementById("mul");
let divide = document.getElementById("divide");
let modulus = document.getElementById("modulus");


let score = 0;
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let num3 = document.getElementById("number3")
var number3;


// Iteration 5: Creating a randomise function to make the game functional

function randomise() {
   
    if (random1 < random2) {
      var extra = random1;
      random1 = random2;
      random2 = extra;
    }
  
    operator = Math.round(Math.random() * 5);

    if(operator===1){
        number3 = random1 + random2;
    }
    else if(operator===2){
        number3 = random1 - random2;
    }
    else if(operator===3){
        number3 = random1 * random2;
    }
    else if(operator===4){
        number3 = Math.floor(random1 / random2);
    }
    else{
        number3 = random1 % random2;
    }

    num1.innerHTML = random1;
    num2.innerHTML = random2;
    num3.innerHTML = number3;
    
    console.log(number3);
  }
  
  randomise();

// Iteration 6: Making the Operators (button) functional
plus.onclick = () => {
    if (random1 + random2 === number3) {
      score++;
      randomise();
      resetTime(timerId);
    } else {
      location.href = "gameover.html?score=" + score;
    }
  };
  
  minus.onclick = () => {
    if (random1 - random2 === number3) {
      score++;
      randomise();
      resetTime(timerId);
    } else {
      window.location.href = "gameover.html?score=" + score;
    }
  };
  
  mul.onclick = () => {
    if (random1 * random2 === number3) {
      score++;
      randomise();
      resetTime(timerId);
    } else {
      window.location.href = "gameover.html?score=" + score;
    }
  };
  
  divide.onclick = () => {
    if (Math.floor(random1 / random2) === number3) {
      score++;
      randomise();
      resetTime(timerId);
    } else {
      window.location.href = "gameover.html?score=" + score;
    }
  };
  
  modulus.onclick = () => {
    if (random1 % random2 === number3) {
      score++;
      randomise();
      resetTime(timerId);
    } else {
      window.location.href = "gameover.html?score=" + score;
    }
  };

// Iteration 7: Making Timer functional
var time = 20;
var timerId;

function startTimer() {
  time = 20;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) window.location.href = "./gameover.html?score=" + score;
    timer.innerHTML = time;
  }, 1000);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();