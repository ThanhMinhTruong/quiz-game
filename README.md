# Quiz Game

A small browser quiz that tests your knowledge of machine learning basics. It's built with plain HTML, CSS and JavaScript, with no frameworks or build step.

## How it works

- Press **Start Quiz** to begin.
- Each question has four answers. Click one, and the correct answer lights up green. If you picked wrong, your choice turns grey.
- The quiz moves to the next question after a second. Your score and a progress bar update as you go.
- At the end you see your final score out of 5 and a message based on how you did. Press **Restart Quiz** to play again.

A looping video plays in the background behind the quiz.

## Questions

The five questions cover:

1. Supervised learning
2. Overfitting
3. K-Means clustering
4. Weights and biases in neural networks
5. Rewards in reinforcement learning

## Running it

Clone the repo and open `index.html` in a browser:

```bash
git clone https://github.com/ThanhMinhTruong/quiz-game.git
cd quiz-game
```

You can also serve the folder with an extension like VS Code's Live Server.

## Files

| File | What it does |
|---|---|
| `index.html` | Page layout: the start, quiz and result screens |
| `style.css` | Colours, buttons, answer grid and progress bar |
| `script.js` | Questions, answer checking, scoring and moving between screens |
| `videoplayback.mp4` | Background video |

## Adding your own questions

Questions live in the `quizQuestions` array at the top of `script.js`. Each one looks like this:

```js
{
    question: "Your question here?",
    answers: [
        { text: "Answer A", correct: false },
        { text: "Answer B", correct: true },
        { text: "Answer C", correct: false },
        { text: "Answer D", correct: false },
    ],
},
```

Each question needs exactly four answers, because the page has four answer buttons. The question count and maximum score update automatically.
