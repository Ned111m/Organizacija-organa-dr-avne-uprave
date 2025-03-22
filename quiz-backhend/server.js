const express = require('express');
const cors = require('cors');
const { shuffle } = require('lodash');
const questions = require('./data/questions');

const app = express();
const PORT = 3001;

// Middleware to allow frontend connection
app.use(cors());

// API endpoint to get random questions
app.get('/api/questions', (req, res) => {
  // 1. Shuffle all questions
  const shuffledQuestions = shuffle(questions);

  // 2. Take first 20 (or adjust the number)
  const randomSelection = shuffledQuestions.slice(0, 20);

  // 3. Shuffle answers for each question
  const processedQuestions = randomSelection.map(q => ({
    ...q,
    answers: shuffle(q.answers)
  }));

  res.json(processedQuestions);
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});