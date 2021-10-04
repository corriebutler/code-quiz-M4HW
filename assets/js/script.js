// Grab Elements from the DOM for Index.HTML
var startQuizEl = document.querySelector('#start-quiz');
var startQuizButton = document.getElementById('start-quiz-button');
var timerCountdown = document.getElementById('timer-countdown');
var questionZoneEl = document.querySelector('#question-zone');
var questionTitleEl = document.getElementById('question-title');
var quizAnswersEl = document.querySelector('#quiz-answers');
var questionResultEl = document.querySelector('#question-result');
var userScoreEl = document.querySelector('#user-score');
var finalScoreEl = document.getElementById('final-score');
var finalScoreContainerEl = document.querySelector('#final-score-container');
var initialsEl = document.querySelector('#initials');
var initialsbtnEl = document.querySelector('#initials-submit-button');

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

questionZoneEl.style.display = 'none'
finalScoreContainerEl.style.display = 'none'

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

        userScoreEl.textContent = userScore -= 12;
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

    initialsbtnEl.addEventListener("click", function(event) {
        event.preventDefault();

        var saveScore = {
            initialsInput: initialsEl.value.trim(),
            score: userScore 
        };

        console.log(userScore);
        console.log(saveScore);

        localStorage.setItem("saveScore", JSON.stringify(saveScore));
    });
};

// When an Answer for Question 4 is selected, the Final Page displays and with their final score

// On Final Score page, they can save their intitals with their score (localStorage)

// Clicking "View High Scores" takes them to the High Scores page where they can see previous high scores and delete them

startQuizButton.onclick = startQuiz;