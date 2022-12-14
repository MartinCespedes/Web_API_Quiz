const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let timeEl = document.getElementById("time");


let questions = [
  {
    question: "How do you print 'Hello World' in the console?",
    choice1: "msgbox.('Hello World')",
    choice2: "alertbox.('Hello World')",
    choice3: "log('Hello World').console",
    choice4: "console.log('Hello World')",
    answer: "4",
  },
  {
    question:
      "What is the correct synxtax when referring to an external script?",
    choice1: "<script> href='xxx.js'",
    choice2: "<script href='xxx.js' ",
    choice3: "<script> 'xxx.js'",
    choice4: "<script href='xxx.js'>",
    answer: "4",
  },
  {
    question: "Inside which file do we use to style our webpage?",
    choice1: "JavaScript file",
    choice2: "HTML file",
    choice3: "CSS file",
    choice4: "None of the above",
    answer: "3",
  },
];
//Constraints//

const CORRECT_BONUS = 25;
const MAX_QUESTIONS = 3;

//Start Game Function//

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

let secondsLeft = 30;

function setTime() {
  // Sets interval in variable
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      return window.location.assign("./gameover.html");
    }
  }, 1000);
}

setTime();

getNewQuestion = () => {
  //Once all questions are answered will end game//
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)


    //Once the game is over, will redirect to the Hiscores//
    return window.location.assign("./gameover.html");

  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  //splice will make answered questions not repeat//
  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

//EventListener for choices//
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    } else {
      secondsLeft -= 5;
    }
      //Timer so questions arent highlighted correct and incorrect at same time//
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();