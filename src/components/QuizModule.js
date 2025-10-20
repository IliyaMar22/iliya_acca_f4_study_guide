import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { getRandomQuestions, getAllQuestions } from '../data/quizData';

const QuizModule = ({ language }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Load 20 random questions from question bank
    setQuestions(getRandomQuestions(20));
  }, []);

  const translations = {
    en: { title: 'Practice Quiz', start: 'Start Quiz', next: 'Next Question', finish: 'Finish Quiz', score: 'Your Score', restart: 'Restart Quiz' },
    bg: { title: 'Практически Тест', start: 'Започни Тест', next: 'Следващ Въпрос', finish: 'Завърши Тест', score: 'Вашият Резултат', restart: 'Рестартирай Тест' }
  };

  const t = translations[language];

  if (questions.length === 0) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading quiz...</div>;
  }

  const handleAnswer = (index) => {
    // Only allow answering once per question
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correctIndex) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const totalBankSize = getAllQuestions().length;

  return (
    <div>
      <h2 style={{ color: '#1a5490', marginBottom: '2rem' }}>{t.title}</h2>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem', padding: '1rem', background: '#e3f2fd', borderRadius: '8px' }}>
        <strong style={{ color: '#1a5490', fontSize: '1.1rem' }}>
          📚 Question Bank: {totalBankSize} Questions Available | This Quiz: 20 Random Questions
        </strong>
      </div>
      {!showResult ? (
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#666' }}>
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '2rem', fontSize: '1.3rem', color: '#333' }}>
              {questions[currentQuestion].question[language]}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  style={{
                    padding: '1.5rem',
                    border: selectedAnswer === index ? '3px solid #667eea' : '2px solid #e0e0e0',
                    borderRadius: '8px',
                    background: selectedAnswer !== null ? (index === questions[currentQuestion].correctIndex ? '#d4edda' : selectedAnswer === index ? '#f8d7da' : '#f5f5f5') : 'white',
                    cursor: selectedAnswer !== null ? 'not-allowed' : 'pointer',
                    fontSize: '1.05rem',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                    opacity: selectedAnswer !== null && selectedAnswer !== index && index !== questions[currentQuestion].correctIndex ? 0.6 : 1
                  }}
                >
                  {selectedAnswer !== null && (index === questions[currentQuestion].correctIndex ? <FaCheck color="green" /> : selectedAnswer === index ? <FaTimes color="red" /> : null)}
                  {option[language]}
                </button>
              ))}
            </div>
          </div>
          {selectedAnswer !== null && (
            <button className="btn btn-primary" onClick={nextQuestion} style={{ marginTop: '2rem' }}>
              {currentQuestion < questions.length - 1 ? t.next : t.finish}
            </button>
          )}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#1a5490', marginBottom: '1rem' }}>{t.score}</h2>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#28a745', marginBottom: '2rem' }}>
            {score} / {questions.length}
          </div>
          <button className="btn btn-primary" onClick={() => { setCurrentQuestion(0); setScore(0); setShowResult(false); setSelectedAnswer(null); setQuestions(getRandomQuestions(20)); }}>
            {t.restart}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizModule;
