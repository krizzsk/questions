import React, { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import confetti from 'canvas-confetti';

const data = [
  {
    option: 'Cybersec',
    style: {
      backgroundColor: '#3498db', // Light blue background
      textColor: 'white',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontSize: 24,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  },
  {
    option: 'Devops',
    style: {
      backgroundColor: '#85c1e9', // Another shade of blue
      textColor: 'black',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontSize: 20,
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  },
  {
    option: 'Agile',
    style: {
      backgroundColor: '#2980b9', // Yet another shade of blue
      textColor: 'white',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontSize: 28,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  },
];

const allQuestions = {
  Cybersec: [
    {
      questionText: 'Question 1 for Cybersec',
      answerOptions: [
        { answerText: 'Option 1', isCorrect: false },
        { answerText: 'Option 2', isCorrect: true },
      ],
    },
    {
      questionText: 'Question 2 for Cybersec',
      answerOptions: [
        { answerText: 'Option 1', isCorrect: false },
        { answerText: 'Option 2', isCorrect: true },
      ],
    },
  ],
  Devops: [
    {
      questionText: 'Question 1 for Devops',
      answerOptions: [
        { answerText: 'Option 1', isCorrect: false },
        { answerText: 'Option 2', isCorrect: true },
      ],
    },
    {
      questionText: 'Question 2 for Devops',
      answerOptions: [
        { answerText: 'Option 1', isCorrect: false },
        { answerText: 'Option 2', isCorrect: true },
      ],
    },
  ],
  Agile: [
    {
      questionText: 'Question 1 for Agile',
      answerOptions: [
        { answerText: 'Option 1', isCorrect: false },
        { answerText: 'Option 2', isCorrect: true },
      ],
    },
    {
      questionText: 'Question 2 for Agile',
      answerOptions: [
        { answerText: 'Option 1', isCorrect: false },
        { answerText: 'Option 2', isCorrect: true },
      ],
    },
  ],
};

const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const [selectedTopic, setSelectedTopic] = useState(null); // Add selectedTopic state

  const handleSpinClick = () => {
    if (!mustSpin) {
      setMustSpin(true);
    }
  };

  useEffect(() => {
    if (mustSpin === false) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
    }
  }, [mustSpin]);

  useEffect(() => {
    let countdownTimer;

    if (showQuiz && timer > 0) {
      countdownTimer = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    if (timer === 0) {
      handleNextQuestion(); // Automatically go to the next question when the timer reaches 0
    }

    return () => {
      clearInterval(countdownTimer);
    };
  }, [showQuiz, timer]);

  const handleStopSpinning = () => {
    // Set the selected topic based on the prizeNumber
    const selectedTopic = data[prizeNumber].option;
    setSelectedTopic(selectedTopic); // Update selectedTopic
    setQuestions(allQuestions[selectedTopic]);
    setShowQuiz(true);
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimer(15); // Reset the timer for the next question
    } else {
      // Trigger confetti for correct answers to all questions
      if (score === questions.length) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
      // Reset the quiz
      setQuestions([]);
      setCurrentQuestion(0);
      setShowQuiz(false);
      setScore(0);
      setTimer(15); // Reset the timer for the next round
    }
  };

  return (
    <div className="app">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div>
          {!showQuiz ? (
            <div>
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                backgroundColors={['#3498db', '#85c1e9', '#2980b9']}
                textColors={['white', 'black', 'white']}
                outerBorderColor="#3498db"
                outerBorderWidth={3}
                innerBorderColor="#85c1e9"
                innerBorderWidth={2}
                fontFamily="Roboto, Arial, sans-serif"
                fontSize={24}
                fontWeight="bold"
                fontStyle="italic"
                perpendicularText={true}
                textDistance={80}
                spinDuration={2.0}
                startingOptionIndex={prizeNumber}
                pointerProps={{
                  src: 'https://raw.githubusercontent.com/krizzsk/questions/main/download-removebg-preview.png',
                  style: { width: '60px', height: '60px' },
                }}
                onStopSpinning={handleStopSpinning}
              />
              <button onClick={handleSpinClick}>SPIN</button>
            </div>
          ) : (
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>
                {questions[currentQuestion].questionText}
              </div>
              <div className='timer'>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    border: '4px solid #3498db',
                    borderTop: '4px solid #ffffff',
                    borderRadius: '50%',
                    animation: 'timer-animation linear infinite',
                    animationDuration: `${timer}s`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '24px',
                  }}
                >
                  {timer}
                </div>
              </div>
            </div>
          )}
        </div>
        {showQuiz && (
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes timer-animation {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
