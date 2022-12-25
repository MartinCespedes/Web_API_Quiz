const username = document.getElementById('username');
const saveScoreButton = document.getElementById('saveScoreButton');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');


const hiScores = JSON.parse(localStorage.getItem('hiScores')) || [];
console.log(hiScores);
finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () => {
    
    saveScoreButton.disabled = !username.value;

});

saveHighScore = e => {
   e.preventDefault();

   const score = {
    score: mostRecentScore,
    name: username.value
   };
   hiScores.push(score);
   console.log(score);
};