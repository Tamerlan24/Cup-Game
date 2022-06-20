let cup1 = document.querySelector('.cup1');
let cup2 = document.querySelector('.cup2');
let cup3 = document.querySelector('.cup3');
let guesses = 0;

// чтобы 1 в cup1 был num1 а не string1
if(cup1.textContent == 1){
    cup1 = 1
    console.log(cup1);
}
if(cup2.textContent == 2){
    cup2 = 2
    console.log(cup2);
}
if(cup3.textContent == 3){
    cup3 = 3
    console.log(cup3);
}


// cups
let cups = [cup1, cup2, cup3];

// buttons
let guess1 = 1;
let guess2 = 2;
let guess3 = 3;

// functions 
let randomNum = () => {
    return Math.floor(Math.random() * 3)
}
let cupBall = cups[randomNum()];
console.log(cupBall);

// Main Code 

let guess1box = () => {
    console.log("yep");
    if (guess1 == cupBall) {
      alert("САЛАВАТ НАЙДЕН");
      document.querySelector(".cup1").classList.add("hideBox");
      document.querySelector(".num1").classList.add("hideBox");
      document.querySelector(".ball1").classList.add("ballCollor");
    } else {
      alert("тагы быр рет");
      guesses++
      console.log(guesses + 'guessss');
      if(guesses == 2){
        alert('САЛАВАТ НЕ НАЙДЕН');
        document.querySelector('.failWindow').classList.add('failWindowActive')
        document.querySelector('.failWindow').innerText('ты проиграл!')
        document.querySelector('wasted').classList.add('wastedActive')

      }
    }
  };
  let guess2box = () => {
    console.log("yep");
    if (guess2 == cupBall) {
      alert("САЛАВАТ НАЙДЕН");
      document.querySelector(".cup2").classList.add("hideBox");
      document.querySelector(".num2").classList.add("hideBox");
      document.querySelector(".ball2").classList.add("ballCollor");
    } else {
      alert("тагы быр рет");
      guesses++
      console.log(guesses + 'guessss');
      if(guesses == 2){
        alert('САЛАВАТ НЕ НАЙДЕН')
        document.querySelector('.failWindow').classList.add('failWindowActive')
        document.querySelector('.failWindow').innerText('ты проиграл!')
        document.querySelector('wasted').classList.add('wastedActive')
      }
    }
  };
  let guess3box = () => {
    console.log("yep");
    if (guess3 == cupBall) {
      alert("САЛАВАТ НАЙДЕН");
      document.querySelector(".cup3").classList.add("hideBox");
      document.querySelector(".num3").classList.add("hideBox");
      document.querySelector(".ball3").classList.add("ballCollor");
    } else {
      alert("тагы быр рет");
      guesses++
      console.log(guesses + 'guessss');
      if(guesses == 2){
        alert('САЛАВАТ НЕ НАЙДЕН')
        document.querySelector('.failWindow').classList.add('failWindowActive')
        document.querySelector('.failWindow').innerText('ты проиграл!')
        document.querySelector('wasted').classList.add('wastedActive')
      }
    }
  };
      

































































