// Grab Elements from the DOM
var startQuizForm = document.getElementById('start-quiz');
var timerCountdown = document.getElementById('timer-countdown');
var questionTitleEl = document.getElementById('question-title');
var correctAnswer = document.getElementById('question-correct');
var wrongAnswer = document.getElementById('question-wrong');
var finalScore = document.getElementById('final-score-container');
var highScore = document.getElementById('high-scores-container');
var startQuizButton = document.getElementById('start-quiz-button');

var startQuizEl = document.querySelector('#start-quiz');
var questionZoneEl = document.querySelector('#question-zone');
var answerQuizEl = document.querySelector('#answer-quiz-button');
var finalScoreEl = document.querySelector('#final-score-container');

// Declaring Variables
var questions = [
    {
        title:'Commonly used data types DO NOT include',
        choices:['Strings', 'Booleans', 'Alerts', 'Numbers'],
        answer:'Strings'
    },
    {
        title:'The condition in an if / else statement is enclosed within:',
        choices:['Strings', 'Booleans', 'Alerts', 'Numbers'],
        answer:'Strings'
    },

];

var timeLeft = 120;
var timerID;
var questionIndex = 0;

questionZoneEl.style.display = 'none'
finalScoreEl.style.display = 'none'

// When Start Quiz Button is Clicked, the Timer Starts and Question One Appears
function startQuiz() {
    startQuizEl.style.display = 'none';
    questionZoneEl.style.display = 'block';

    timerID = setInterval(clockTick, 1000);
    generateNewQuestion();
};

function generateNewQuestion() {
    var currentQuestion = questions[questionIndex];

    questionTitleEl.textContent = currentQuestion.title;
    currentQuestion.choices.forEach(function(element) {
        var temp = document.createElement('button');

        temp.textContent = element;
        temp.setAttribute('class','cta cta-primary quiz-button');
        temp.setAttribute('value', element);

        temp.onclick = validateAnswer;

        answerQuizEl.appendChild(temp);
    });

};

function validateAnswer() {
    var selectedAnswer = this.value;
    console.log(selectedAnswer);

    questionIndex++;

    generateNewQuestion();
};

function clockTick() {
    timeLeft--
    
    timerCountdown.textContent = timeLeft + 's';
};

function endQuiz() {

};



// When an Answer for Question 1 is selected, Question 2 displays and whether they got it right or wrong

// When an Answer for Question 2 is selected, Question 3 displays and whether they got it right or wrong

// When an Answer for Question 3 is selected, Question 4 displays and whether they got it right or wrong

// When an Answer for Question 4 is selected, the Final Page displays and with their final score

// On Final Score page, they can save their intitals with their score (localStorage)

// Clicking "View High Scores" takes them to the High Scores page where they can see previous high scores and delete them

startQuizButton.onclick = startQuiz;