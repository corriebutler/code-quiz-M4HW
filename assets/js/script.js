// Grab Elements from the DOM for Index.HTML
var startQuizEl = document.querySelector('#start-quiz');
var startQuizButton = document.getElementById('start-quiz-button');
var timerCountdown = document.getElementById('timer-countdown');
var questionZoneEl = document.querySelector('#question-zone');
var questionTitleEl = document.getElementById('question-title');
var quizAnswersEl = document.querySelector('#quiz-answers');
var questionResultEl = document.querySelector('#question-result');
var lastQuestionResultsEl = document.querySelector('#last-question-results');
var userScoreEl = document.querySelector('#user-score');
var finalScoreEl = document.getElementById('final-score');
var finalScoreContainerEl = document.querySelector('#final-score-container');
var initialsEl = document.querySelector('#initials');
var initialsbtnEl = document.querySelector('#initials-submit-button');
var highscoreDisplayEl = document.querySelector('#high-score-users');
var scoreSavedEl = document.querySelector('#score-saved');

// Declaring Variables
var questions = [
    {
        title:'Commonly used data types DO NOT include:',
        choices:['Strings', 'Booleans', 'Alerts', 'Numbers'],
        answer:'Alerts'
    },
    {
        title:'The condition in an if / else statement is enclosed within:',
        choices:['Quotes', 'Curly Brackets', 'Parenthesis', 'Square Brackets'],
        answer:'Parenthesis'
    },
    {
        title:'Arrays in JavaScript can be used to store:',
        choices:['Numbers', 'Other Arrays', 'Booleans', 'All of the Above'],
        answer:'All of the Above'
    },
    {
        title:'String values must be enclosed withing _______ when being assigned to variables.',
        choices:['Commas', 'Curly Brackets', 'Quotes', 'Parenthesis'],
        answer:'Quotes'
    },

];


var timeLeft = 90;
var timerID;
var questionIndex = 0;
var userScore = 90;
var scoreIdCounter = 0;
// var highScores = [];

questionZoneEl.style.display = 'none'
finalScoreContainerEl.style.display = 'none'

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);
  
    return value;
  };

// When Start Quiz Button is Clicked, the Timer Starts and Question One Appears
function startQuiz() {
    startQuizEl.style.display = 'none';
    questionZoneEl.style.display = 'block';
    
    timerID = setInterval(clockTick, 1000);
    generateNewQuestion();
};

// Generated new questions after answering others
function generateNewQuestion() {
    var currentQuestion = questions[questionIndex];
    var endQuestions = questions[questions.length + 1]
    
    if (currentQuestion == endQuestions) {
        endQuiz();
    }
    else {
    questionTitleEl.textContent = currentQuestion.title;
    questionTitleEl.setAttribute('class','question-title');
    quizAnswersEl.innerHTML = '';
    currentQuestion.choices.forEach(function(element) {
        var temp = document.createElement('button');
        
        temp.textContent = element;
        temp.setAttribute('class','cta cta-primary quiz-button');
        temp.setAttribute('value', element);
        
        temp.onclick = validateAnswer;
        
        quizAnswersEl.appendChild(temp);
        
    });
}
};

// Displaying if you got the score right or wrong
function validateAnswer() {
    var currentQuestion = questions[questionIndex];
    var selectedAnswer = this.value;
    
    if (selectedAnswer === currentQuestion.answer) {
        questionResultEl.textContent = 'Correct!';
        questionResultEl.setAttribute('class','question-results');
    }
    else {
        questionResultEl.textContent = 'Wrong!';
        questionResultEl.setAttribute('class','question-results');
        
        timeLeft -= 10;
        clockTick;

        userScoreEl.textContent = userScore -= randomNumber(9, 21);
    };
    
    questionIndex++;
    
    generateNewQuestion();
};

// Timer function
function clockTick() {
    timeLeft--
    
    timerCountdown.textContent = timeLeft;

    if (timeLeft <= 0) {
        endQuiz();
    };
};

// Last page of the quiz
function endQuiz() {
    clearInterval(timerID);
    questionZoneEl.style.display = 'none'
    finalScoreContainerEl.style.display = 'block'
    
    finalScoreEl.textContent = userScore;
};

// Saving your High Score
initialsbtnEl.addEventListener('click', function saveHighScore() {
    
    if (initialsEl.value === "") {
        alert('Must include initials to save high score.');
        return false;
    }
    else {
        var highScores = JSON.parse(localStorage.getItem('saveScore')) || [];
        var initials = initialsEl.value.trim();
        var saveScore = {
            name: initials,
            score: userScore
        };
        
    }
    
    initialsEl.value = "";

    console.log(saveScore);
    highScores.push(saveScore);
    console.log(highScores);

    localStorage.setItem("saveScore", JSON.stringify(highScores));

    scoreSavedEl.textContent = "Your High Score was Saved!"
    scoreSavedEl.setAttribute('class','question-results');

});

startQuizButton.onclick = startQuiz;