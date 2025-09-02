let currentQuiz = [];
let currentIndex = 0;
let score = 0;

function startQuiz(theme) {
  const quizzes = {
    gk: typeof gkQuestions !== "undefined" ? gkQuestions : [],
    sports: typeof sportsQuestions !== "undefined" ? sportsQuestions : [],
    movies: typeof moviesQuestions !== "undefined" ? moviesQuestions : [],
    science: typeof scienceQuestions !== "undefined" ? scienceQuestions : [],
    personality: typeof personalityQuestions !== "undefined" ? personalityQuestions : [],
    hackathon: typeof hackathonQuestions !== "undefined" ? hackathonQuestions : [],
    game: typeof gamingQuestions !== "undefined" ? gamingQuestions : [],
    techHistory: typeof techHistoryQuestions  !== "undefined" ? techHistoryQuestions  : []
  };

  if (!quizzes[theme] || quizzes[theme].length === 0) {
    alert("⚠️ Quiz not available yet!");
    return;
  }

  currentQuiz = quizzes[theme];
  currentIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  if (currentIndex < currentQuiz.length) {
    const q = currentQuiz[currentIndex];

    // question
    const questionEl = document.createElement("h2");
    questionEl.textContent = `${q.id ? q.id + ": " : ""}${q.question}`;
    container.appendChild(questionEl);

    if (q.options) {
      // ---------- MCQ quiz ----------
      q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        btn.classList.add("option");
        btn.onclick = () => {
          // disable all buttons after click
          const allBtns = container.querySelectorAll("button");
          allBtns.forEach(b => b.disabled = true);

          if (opt.correct) {
            btn.style.backgroundColor = "green";
            score++;
          } else {
            btn.style.backgroundColor = "red";
            // show correct answer in green
            allBtns.forEach(b => {
              const correctOpt = q.options.find(o => o.text === b.textContent && o.correct);
              if (correctOpt) b.style.backgroundColor = "green";
            });
          }

          // show next after short delay
          setTimeout(() => {
            currentIndex++;
            showQuestion();
          }, 1200);
        };
        container.appendChild(btn);
      });

    } else {
      // ---------- Personality quiz (input based) ----------
      const input = document.createElement("input");
      input.type = q.type || "text";
      input.classList.add("input-box");
      container.appendChild(input);

      const nextBtn = document.createElement("button");
      nextBtn.textContent = "Next";
      nextBtn.classList.add("btn");
      nextBtn.onclick = () => {
        console.log(`Answer for ${q.id || "Q"}:`, input.value); // (save if needed)
        currentIndex++;
        showQuestion();
      };
      container.appendChild(nextBtn);
    }

  } else {
    container.innerHTML = `
      <h2>✅ Quiz Completed!</h2>
      <p>Your Score: ${score} / ${currentQuiz.filter(q => q.options).length}</p>
      <button onclick="location.reload()">Restart</button>
    `;
  }
}

