import React, { useState, useEffect } from 'react';

const questions = [
  {
    question: "What's been keeping you awake?",
    options: [
      "Stress or Anxiety",
      "Overthinking",
      "Physical Discomfort",
      "I'm not sure"
    ]
  },
  {
    question: "How do you feel right now?",
    options: [
      "Restless",
      "Tense",
      "Sad or Lonely",
      "Numb or Detached"
    ]
  },
  {
    question: "What usually helps you unwind?",
    options: [
      "A warm, cozy environment",
      "Gentle, calming sounds",
      "Guided breathing or meditation",
      "Writing or reflecting on my thoughts"
    ]
  },
  {
    question: "How would you prefer to relax tonight?",
    options: [
      "Listening to calming music",
      "Hearing nature sounds like rain or waves",
      "Watching a slow-moving visual scene",
      "Doing a guided exercise to calm my mind"
    ]
  },
  {
    question: "What kind of environment feels most comforting to you?",
    options: [
      "A quiet, dark room",
      "A warm fire by a cabin window",
      "A peaceful forest or beach",
      "A rainy day with soft thunder in the distance"
    ]
  },
  {
    question: "Do you enjoy following a soothing voice to help you sleep?",
    options: [
      "Yes, I find it comforting",
      "Sometimes, depending on my mood",
      "No, I prefer just sounds or music",
      "I've never tried it"
    ]
  },
  {
    question: "If you could add something to enhance your relaxation, what would it be?",
    options: [
      "Soft background music",
      "Ambient nature sounds",
      "Positive affirmations or sleep stories",
      "Something else entirely"
    ]
  }
];

const SleepCategory: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string[] }>({});
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuestionnaire(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = (option: string) => {
    setAnswers(prev => {
      const currentAnswers = prev[currentQuestion] || [];
      const updatedAnswers = currentAnswers.includes(option)
        ? currentAnswers.filter(a => a !== option)
        : [...currentAnswers, option];
      return { ...prev, [currentQuestion]: updatedAnswers };
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowCompletion(true);
    }
  };

  return (
    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center overflow-hidden">
      {/* Earth Video */}
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden animate-fade-in" style={{ animationDuration: '1.5s' }}>
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="https://i.imgur.com/4Nj2rsn.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Questionnaire */}
      {showQuestionnaire && !showCompletion && (
        <div className="z-10 bg-black bg-opacity-80 p-8 rounded-lg max-w-2xl w-full mx-4 mt-4 animate-fade-in shadow-lg" style={{ animationDuration: '1.5s' }}>
          <h2 className="text-3xl font-bold mb-6 text-white text-center">{questions[currentQuestion].question}</h2>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`w-full p-4 rounded-lg text-left transition-colors duration-300 ${
                  answers[currentQuestion]?.includes(option)
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={nextQuestion}
            className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 w-full"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish'}
          </button>
        </div>
      )}

      {/* Completion Message */}
      {showCompletion && (
        <div className="z-10 bg-black bg-opacity-80 p-8 rounded-lg max-w-2xl w-full mx-4 mt-4 animate-fade-in shadow-lg text-white text-center" style={{ animationDuration: '1.5s' }}>
          <h2 className="text-3xl font-bold mb-6">Congratulations!</h2>
          <p className="text-xl mb-6">90% of users have grown spiritually and found peace using our application.</p>
          <p className="text-lg mb-8">Experience the full benefits of our service for just $29.99 per month.</p>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
            Start Your Journey to Peace
          </button>
        </div>
      )}
    </div>
  );
};

export default SleepCategory;