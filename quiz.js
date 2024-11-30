const questions = [
    {
      question: "Which civilization is considered the first known human civilization?",
      answers: [
        { text: "Egyptian", correct: false },
        { text: "Indus Valley", correct: false },
        { text: "Sumerian", correct: true },
        { text: "Chinese", correct: false },
      ],
    },
    {
      question: "Who was the first emperor of a unified China?",
      answers: [
        { text: "Kublai Khan", correct: false },
        { text: "Qin Shi Huang", correct: true },
        { text: "Sun Yat-sen", correct: false },
        { text: "Confucius", correct: false },
      ],
    },

    {
        question: "What event marked the beginning of World War I?",
        answers: [
            { text: "The sinking of the Lusitania", correct: false },
            { text: "The Russian Revolution", correct: false },
            { text: "The assassination of Archduke Franz Ferdinand", correct: true },
            { text: "The Treaty of Versailles", correct: false }
        ]
    },
    {
        question: "Which ancient Greek city-state was known for its military prowess?",
        answers: [
            { text: "Athens", correct: false },
            { text: "Corinth", correct: false },
            { text: "Sparta", correct: true },
            { text: "Thebes", correct: false }
        ]
    },
    {
        question: "What year did the Berlin Wall fall, symbolizing the end of the Cold War?",
        answers: [
            { text: "1987", correct: false },
            { text: "1989", correct: true },
            { text: "1991", correct: false },
            { text: "1993", correct: false }
        ]
    },
    {
        question: "Who discovered the Americas in 1492?",
        answers: [
            { text: "Ferdinand Magellan", correct: false },
            { text: "Vasco da Gama", correct: false },
            { text: "Christopher Columbus", correct: true },
            { text: "Hernán Cortés", correct: false }
        ]
    },
    {
        question: "Which empire was known as the 'Land of the Rising Sun'?",
        answers: [
            { text: "Chinese Empire", correct: false },
            { text: "Japanese Empire", correct: true },
            { text: "Mongol Empire", correct: false },
            { text: "Ottoman Empire", correct: false }
        ]
    },
    {
        question: "What was the primary reason for the start of the Crusades?",
        answers: [
            { text: "Conquest of Europe", correct: false },
            { text: "Control of the Silk Road", correct: false },
            { text: "Capture of Jerusalem", correct: true },
            { text: "Spread of Christianity in Africa", correct: false }
        ]
    },
    {
        question: "The Renaissance began in which country?",
        answers: [
            { text: "France", correct: false },
            { text: "Italy", correct: true },
            { text: "Germany", correct: false },
            { text: "England", correct: false }
        ]
    },
    {
        question: "Which revolution is associated with the slogan 'Liberty, Equality, Fraternity'?",
        answers: [
            { text: "American Revolution", correct: false },
            { text: "Russian Revolution", correct: false },
            { text: "French Revolution", correct: true },
            { text: "Industrial Revolution", correct: false }
        ]
    },
    {
        question: "Who led India's non-violent independence movement?",
        answers: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Subhas Chandra Bose", correct: false },
            { text: "Bhagat Singh", correct: false },
            { text: "Mahatma Gandhi", correct: true }
        ]
    },
    {
        question: "In which year did the United Nations form?",
        answers: [
            { text: "1919", correct: false },
            { text: "1945", correct: true },
            { text: "1948", correct: false },
            { text: "1952", correct: false }
        ]
    },
    {
        question: "What was the capital city of the Byzantine Empire?",
        answers: [
            { text: "Rome", correct: false },
            { text: "Alexandria", correct: false },
            { text: "Constantinople", correct: true },
            { text: "Athens", correct: false }
        ]
    },
    {
        question: "Which African country successfully resisted European colonization during the Scramble for Africa?",
        answers: [
            { text: "Ethiopia", correct: true },
            { text: "Nigeria", correct: false },
            { text: "Ghana", correct: false },
            { text: "South Africa", correct: false }
        ]
    },
    {
        question: "The Industrial Revolution began in which country?",
        answers: [
            { text: "United States", correct: false },
            { text: "France", correct: false },
            { text: "Germany", correct: false },
            { text: "England", correct: true }
        ]
    },
    {
        question: "Which treaty ended World War I?",
        answers: [
            { text: "Treaty of Versailles", correct: true },
            { text: "Treaty of Tordesillas", correct: false },
            { text: "Treaty of Paris", correct: false },
            { text: "Treaty of Ghent", correct: false }
        ]
    },
    {
        question: "Who was the first President of the United States?",
        answers: [
            { text: "Thomas Jefferson", correct: false },
            { text: "Abraham Lincoln", correct: false },
            { text: "George Washington", correct: true },
            { text: "John Adams", correct: false }
        ]
    },
    {
        question: "The Magna Carta was signed in which year?",
        answers: [
            { text: "1066", correct: false },
            { text: "1215", correct: true },
            { text: "1492", correct: false },
            { text: "1776", correct: false }
        ]
    },
    {
        question: "Which nation was the first to industrialize?",
        answers: [
            { text: "France", correct: false },
            { text: "Japan", correct: false },
            { text: "England", correct: true },
            { text: "United States", correct: false }
        ]
    },
    {
        question: "What was the name of the Soviet satellite that became the first artificial satellite to orbit the Earth?",
        answers: [
            { text: "Apollo", correct: false },
            { text: "Sputnik", correct: true },
            { text: "Vostok", correct: false },
            { text: "Luna", correct: false }
        ]
    }


  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const resultSection = document.getElementById("result-section");
  const scoreElement = document.getElementById("score");
  const totalQuestionsElement = document.getElementById("total-questions");
  const restartButton = document.getElementById("restart-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultSection.classList.add("hidden");
    answerButtons.classList.remove("hidden");
    nextButton.style.display = "none";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = true;
      }
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    selectedButton.classList.add(isCorrect ? "correct" : "incorrect");
    if (isCorrect) score++;
    Array.from(answerButtons.children).forEach((button) => {
      button.disabled = true;
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
    });
    nextButton.style.display = "block";
  }
  
  function showResults() {
    answerButtons.classList.add("hidden");
    resultSection.classList.remove("hidden");
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = questions.length;
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }
  
  nextButton.addEventListener("click", handleNextButton);
  restartButton.addEventListener("click", startQuiz);
  
  // Initialize the quiz
  startQuiz();
  