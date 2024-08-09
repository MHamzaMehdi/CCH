const quizData = [
    {
        question: "What is the tag used to create a Hyperlink?",
        options: ["<button>", "<link>", "<a>", "<image>"],
        correct: "<a>"
    },
    {
        question: "What is the Purpose of blind() method in JavaScript?",
        options: [" To create a new function with a bound context.",
            " To create a new Array with a bound length.",
             " To create a new function with a bound Prototype.",
             " None of the above."],
        correct: " To create a new function with a bound context."
    },
    {
        question: "What is the difference between a list and a Tuple in Python?",
        options: ["Lists are mutable, while tuples are immutable.",
             " Lists are immutable, while tuples are mutable.",
             " Lists are used for numerical values, while tuples are used for string values.",
             " None of the above."],
        correct: "Lists are mutable, while tuples are immutable."
    },
    {
        question: "What is the difference between null and undefined in JavaScript?",
        options: [" null is a primitive value, while undefined is a reference type. ", 
            " null represents an empty object, while undefined represents an uninitialized variable.",
            " null is used for numerical values, while undefined is used for string values.",
            " None of the above."],
        
        correct: " null represents an empty object, while undefined represents an uninitialized variable."
    },
    {
        question: " What is the keyword used to declare a variable in JavaScript?",
        options: ["let", "const", "var", "All of the above."],
        correct: "All of the above."
    }
];

let currentQuestionIndex =0;
let score = currentQuestionIndex;

const questionElement = document.getElementById('question');
const optionsContainer = document.querySelector('.options');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');

function loadQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsContainer.innerHTML = '';

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.addEventListener('click', () => selectOption(option));
            optionsContainer.appendChild(button);
        });

        nextButton.style.display = 'none';
        resultContainer.style.display = 'none';
    } else {
        showResult();
    }
}

function selectOption(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
        score++;
    }

    document.querySelectorAll('.option').forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuestion.correct) {
            button.style.backgroundColor = '#4CAF50';
        } else if (button.textContent === selectedOption) {
            button.style.backgroundColor = '#f44336';
        }
    });

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    resultContainer.style.display = 'block';
    resultElement.textContent = `Your Score: ${score} / ${quizData.length}`;
    restartButton.style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    restartButton.style.display = 'none';
    loadQuestion();
}

nextButton.addEventListener('click' , nextQuestion);
restartButton.addEventListener('click' , restartQuiz)
loadQuestion();
