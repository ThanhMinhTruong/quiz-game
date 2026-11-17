const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answer-container");
const currentQuestionSpan = document.getElementById("question-number");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress-fill");


const quizQuestions = [
    {
        question: "What type of machine learning uses labeled data to train a model?",
        answers: [
            { text: "Unsupervised learning", correct: false },
            { text: "Supervised learning", correct: true },
            { text: "Reinforcement learning", correct: false },
            { text: "Clustering", correct: false },
        ],
    },
    {
        question: "What is it called when a model memorizes the training data and performs poorly on new data?",
        answers: [
            { text: "Underfitting", correct: false },
            { text: "Regularization", correct: false },
            { text: "Overfitting", correct: true },
            { text: "Normalization", correct: false },
        ],
    },
    {
        question: "Which algorithm is commonly used to group data into clusters?",
        answers: [
            { text: "K-Means", correct: true },
            { text: "Linear Regression", correct: false },
            { text: "Logistic Regression", correct: false },
            { text: "Decision Tree", correct: false },
        ],
    },
    {
        question: "What does a neural network adjust during training to reduce error?",
        answers: [
            { text: "The input data", correct: false },
            { text: "The number of layers", correct: false },
            { text: "The weights and biases", correct: true },
            { text: "The output labels", correct: false },
        ],
    },
    {
        question: "In reinforcement learning, what does an agent try to maximize?",
        answers: [
            { text: "Accuracy", correct: false },
            { text: "Loss", correct: false },
            { text: "Training time", correct: false },
            { text: "Reward", correct: true },
        ],
    },
];


let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;
    showQuestion();
    console.log("Quiz started.");
}

function restartQuiz() {
    resultScreen.classList.remove("active");
    startQuiz();
}

// The four answer buttons already in index.html (Option 1-4)
const optionButtons = document.querySelectorAll(".option-btn");

optionButtons.forEach(button => {
    button.addEventListener("click", selectAnswer);
});

function showQuestion() {
    answersDisabled = false;
    const currentQuestion = quizQuestions[currentQuestionIndex];

    questionText.textContent = currentQuestion.question;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercentage = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercentage + "%";

    // Put each answer into one of the existing buttons
    currentQuestion.answers.forEach((answer, i) => {
        const button = optionButtons[i];
        button.textContent = answer.text;
        button.dataset.correct = answer.correct;
        button.classList.remove("correct", "incorrect");
    });
}

function selectAnswer(event) {
    if (answersDisabled) return;

    answersDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    optionButtons.forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("incorrect");
        }
    });

    if (isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");
    finalScoreSpan.textContent = score;
    const percentage = (score / quizQuestions.length) * 100;

    if (percentage >= 100) {
        resultMessage.textContent = "Perfect score! You're a machine learning master!";
    } else if (percentage >= 80) {
        resultMessage.textContent = "Great job! You have a strong understanding of machine learning.";
    } else if (percentage >= 50) {
        resultMessage.textContent = "Good effort! Keep learning and practicing to improve your knowledge.";
    } else {
        resultMessage.textContent = "Don't be discouraged! Machine learning is a complex field. Keep studying and you'll improve!";
    }
}
