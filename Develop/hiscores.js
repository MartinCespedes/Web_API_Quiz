const username = document.getElementById("username");
const saveScoreButton = document.getElementById("saveScoreButton");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const hiScores = JSON.parse(localStorage.getItem("hiScores")) || [];
const MAX_HI_SCORES = 5;

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
  saveScoreButton.disabled = !username.value;
});

saveHighScores = (e) => {
  e.preventDefault();

  const score = [
    {
      score: mostRecentScore,
      name: username.value,
    },
  ];
  hiScores.push(score);
  // If the b score is higher than b score, but b before a//
  hiScores.sort((a, b) => b.score - a.score);
  // Once the hiscores get to 5, adding anything new will start to delete//
  hiScores.splice(5);

  localStorage.setItem("hiScores", JSON.stringify(hiScores));
  window.location.pathname = "./index.html";
};
