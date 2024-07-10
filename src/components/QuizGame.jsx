import React, { useState } from 'react';
import { ChevronLeft, Check } from 'lucide-react';
import './QuizGame.css'; // Import the CSS file

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "In what year did the United States host the FIFA World Cup for the first time?",
      options: ["1986", "1994", "2002", "2010"],
      correctAnswer: "1994"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      question: "What is the capital city of Japan?",
      options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
      correctAnswer: "Tokyo"
    }
  ];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answer
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  if (quizCompleted) {
    const score = calculateScore();
    const passed = score > questions.length / 2;

    return (
      <div className="max-w-2xl mx-auto p-8 bg-white min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Quiz Completed!</h1>
        <p className="text-xl mb-4">Your score: {score} out of {questions.length}</p>
        {passed ? (
          <div className="text-center">
            <p className="text-2xl text-green-600 font-semibold mb-4">Congratulations!</p>
            <p>You've passed the quiz with flying colors!</p>
          </div>
        ) : (
          <p className="text-xl">Keep practicing and try again!</p>
        )}
      </div>
    );
  }

  return (
    <div className="quiz-game max-w-2xl mx-auto p-8 bg-white min-h-screen">
      <div className="flex items-center mb-6">
        <button 
          onClick={handlePrevious} 
          className="flex items-center text-blue-600 hover:text-blue-800"
          disabled={currentQuestion === 0}
        >
          <ChevronLeft className="mr-1" />
          <span>Previous</span>
        </button>
        <span className="ml-auto">{currentQuestion + 1}/{questions.length}</span>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {questions[currentQuestion].question}
        </h2>
      </div>

      {questions[currentQuestion].options.map((option, index) => (
        <div 
          key={index}
          className={`mb-4 p-4 rounded-lg flex items-center justify-between cursor-pointer ${
            selectedAnswers[currentQuestion] === option
              ? 'bg-green-200 border-green-500'
              : 'bg-gray-100 hover:bg-gray-200 border-gray-200'
          } border transition-colors`}
          onClick={() => handleAnswerSelect(option)}
        >
          <span>{option}</span>
          {selectedAnswers[currentQuestion] === option && <Check className="text-green-500" />}
        </div>
      ))}

      <button
        className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition-colors"
        onClick={handleNext}
        disabled={!selectedAnswers[currentQuestion]}
      >
        {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
      </button>
    </div>
  );
};

export default QuizGame;
