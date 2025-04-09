let correctAnswer = 0;

function newQuestion() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  correctAnswer = a * b;

  document.getElementById("question").textContent = `Πόσο κάνει ${a} × ${b};`;

  const answers = [correctAnswer];
  while (answers.length < 3) {
    const wrong = Math.floor(Math.random() * 100);
    if (!answers.includes(wrong)) answers.push(wrong);
  }

  answers.sort(() => Math.random() - 0.5);

  const buttons = document.querySelectorAll(".answers button");
  buttons.forEach((btn, i) => {
    btn.textContent = answers[i];
    btn.disabled = false;
  });

  document.getElementById("feedback").textContent = "";
}

function checkAnswer(button) {
  const answer = parseInt(button.textContent);
  if (answer === correctAnswer) {
    document.getElementById("feedback").textContent = "Μπράβο! Σωστή απάντηση!";
  } else {
    document.getElementById("feedback").textContent = "Ουπς! Λάθος απάντηση.";
  }

  document.querySelectorAll(".answers button").forEach(btn => btn.disabled = true);
}
