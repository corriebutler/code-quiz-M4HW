// Grabbing Elements from the DOM for High Scores page
var highscoreContainerEl = document.querySelector('#high-score-container')
var highscoreDisplayEl = document.querySelector('#high-score-users');
var userScoreDisplayEl = document.querySelector('#users-high-score');
var clearHighscoresEl = document.querySelector('#clear-scores-button');

// Displaying savedScores on High Scores Page
var loadScores = function() {
    var savedScores = JSON.parse(localStorage.getItem('saveScore')) || [];
    for (var i = 0; i < savedScores.length; i++) {
        var scoreContainer = document.createElement('div');
        scoreContainer.textContent = savedScores[i].name + " " + savedScores[i].score;
        userScoreDisplayEl.appendChild(scoreContainer);
    }
};

loadScores();