import React, { useState } from 'react';
import Question from './Question';
import Results from './Results';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    correct: 2
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correct: 1
  },
  // Add more questions as needed
  {
    question: 'who is the speciale one',
    options: ['pep','klopp','Mourinho'],
    correct: 2
  },
  {
    question: 'the honored one',
    options: ['gojo','sukuna','itadori'],
    correct: 0
  },
  {
    question: 'in what date did France invade Algeria',
    options: ['5 july1830','5 june 1830','7 may 1830'],
    correct: 1
  },
  {
    question: 'in what date did hitler invade france',
    options: ['10 may 1940','15 july 1940','10 june 1940'],
    correct: 0
  },
  {
    question: 'who was the most richest person in the history',
    options: ['elon musk','bill gates','Mansa Moussa '],
    correct: 2
  },
  {
    question:'who is the goat',
    options: ['cristiano','messi','pele'],
    correct: 0
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (index) => {
    if (index === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="quiz">
      {showResults ? (
        <Results score={score} total={quizData.length} />
      ) : (
        <Question
          data={quizData[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
