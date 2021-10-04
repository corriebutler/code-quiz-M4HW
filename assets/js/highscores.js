// Grabbing Elements from the DOM for High Scores page
var highscoreContainerEl = document.querySelector('#high-score-container')
var highscoreDisplayEl = document.querySelector('#high-score-users');
var clearHighscoresEl = document.querySelector('#clear-scores-button');

var highScores = [];



// Function to show the scores
var showScores = function(scoreDataObj) {
    var listScoresEl = document.createElement('li');
    listScoresEl.setAttribute = ('class','text-align-center question-title');

    var scoresInfoEl = document.createElement('div');
    scoresInfoEl.innerHTML = scoreDataObj.initialsInput + taskDataObj.score;
    listScoresEl.appendChild(scoresInfoEl);

    scores.push(scoreDataObj);

    highscoreDisplayEl.appendChild(listScoresEl);

    // highscoreContainerEl.appendChild(highscoreDisplayEl);
};

// Displaying savedScores on High Scores Page
var loadScores = function() {
    var savedScores = localStorage.getItem('saveScore');
    
    // Display no high scores yet
    if (!savedScores) {
        highscoreDisplayEl.textContent = 'No High Scores Yet!';
        return false;
    }
    console.log('Saved Scores Found!');
    console.log(savedScores);

    savedScores = JSON.parse(savedScores);

    highscoreDisplayEl.textContent = "User: " + savedScores.initialsInput + " Score: " + savedScores.score;
    for (var i = 0; i < savedScores.length; i++) {
        showScores(savedScores[i]);
    }
}; 

loadScores();