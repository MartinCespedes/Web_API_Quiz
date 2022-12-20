const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question:"How do you print 'Hello World' in the console?",
        choice1:"msgbox.('Hello World')",
        choice2:"alertbox.('Hello World')",
        choice3:"log('Hello World').console",
        choice4:"console.log('Hello World')",
        answer:"4"

    },
    {
        question:"What is the correct synxtax when referring to an external script?",
        choice1:"<script> href='xxx.js'",
        choice2:"<script href='xxx.js' ",
        choice3:"<script> 'xxx.js'",
        choice4:"<script href='xxx.js'>",
        answer:"4"

    },
    {
        question:"Inside which file do we use to style our webpage?",
        choice1:"JavaScript file",
        choice2:"HTML file",
        choice3:"CSS file",
        choice4:"None of the above",
        answer:"3"

    },
];






//Constraints

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {}
