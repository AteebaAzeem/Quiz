const quizData = [
    {
      question: "What is the capital of Pakistan?",
      a: "Karachi",
      b: "Lahore",
      c: "Islamabad",
      d: "Quetta",
      correct: "c"
    },
    {
      question: "When pakistan came into being?",
      a: "14 aug 1947",
      b: "15 aug 1948",
      c: "11 dec 1947",
      d: "6 sep 1946",
      correct: "a"
    },
    {
      question: "Who is the first pm of Pakistan?",
      a: "Allama Iqbal",
      b: "Liaquat Ali Khan",
      c: "Mohammad Ali Jinnah",
      d: "Sir Syed Ahmed Khan",
      correct: "b"
    },
    {
      question: "Who is the first governor general  of Pakistan?",
      a: "Allama Iqbal",
      b: "Liaquat Ali Khan",
      c: "Mohammad Ali Jinnah",
      d: "Sir Syed Ahmed Khan",
      correct: "c"
    },
    {
      question: "What is the national language of Pakistan?",
      a: "Punjabi",
      b: "Urdu",
      c: "Sindhi",
      d: "Pashto",
      correct: "b"
    }
  ];
  
  const quizContainer = document.getElementById('quiz-container');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');
  const resultContainer = document.getElementById('result-container');
  const scoreEl = document.getElementById('score');
  const restartBtn = document.getElementById('restart-btn');
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    clearQuiz();
    const currentQuizData = quizData[currentQuiz];
    const questionEl = document.createElement('div');
    questionEl.classList.add('mb-4');
    questionEl.innerHTML = `<h5>${currentQuizData.question}</h5>`;
    
    quizContainer.appendChild(questionEl);
    
    for (const option in currentQuizData) {
      if (option !== 'question' && option !== 'correct') {
        const optionEl = document.createElement('div');
        optionEl.classList.add('form-check');
        optionEl.innerHTML = `
          <input class="form-check-input" type="radio" name="answer" id="${option}" value="${option}">
          <label class="form-check-label" for="${option}">${currentQuizData[option]}</label>
        `;
        quizContainer.appendChild(optionEl);
      }
    }
  }
  
  function clearQuiz() {
    quizContainer.innerHTML = '';
  }
  
  function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selected = null;
    
    answers.forEach(answer => {
      if (answer.checked) {
        selected = answer.value;
      }
    });
    
    return selected;
  }
  
  nextBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      
      currentQuiz++;
      
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        nextBtn.classList.add('d-none');
        submitBtn.classList.remove('d-none');
      }
    } else {
      alert('Please select an answer');
    }
  });
  
  submitBtn.addEventListener('click', () => {
    quizContainer.classList.add('d-none');
    resultContainer.classList.remove('d-none');
    scoreEl.innerText = `${score} out of ${quizData.length}`;
  });
  
  restartBtn.addEventListener('click', () => {
    score = 0;
    currentQuiz = 0;
    quizContainer.classList.remove('d-none');
    resultContainer.classList.add('d-none');
    nextBtn.classList.remove('d-none');
    submitBtn.classList.add('d-none');
    loadQuiz();
  });
  