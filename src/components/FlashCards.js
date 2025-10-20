import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaRedo, FaRandom } from 'react-icons/fa';
import { getAllFlashcards } from '../data/flashcardsData';

const FlashCards = ({ language }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const flashcards = getAllFlashcards();

  const translations = {
    en: {
      title: 'Flashcards',
      subtitle: '25+ cards covering all topics',
      question: 'Question',
      answer: 'Answer',
      showAnswer: 'Show Answer',
      hideAnswer: 'Hide Answer',
      next: 'Next Card',
      previous: 'Previous Card',
      restart: 'Restart',
      random: 'Random',
      progress: 'Card {{current}} of {{total}}',
      chapter: 'Chapter'
    },
    bg: {
      title: 'Карти за Учене',
      subtitle: '25+ карти, обхващащи всички теми',
      question: 'Въпрос',
      answer: 'Отговор',
      showAnswer: 'Покажи Отговор',
      hideAnswer: 'Скрий Отговор',
      next: 'Следваща Карта',
      previous: 'Предишна Карта',
      restart: 'Рестартирай',
      random: 'Случайна',
      progress: 'Карта {{current}} от {{total}}',
      chapter: 'Глава'
    }
  };

  const t = translations[language];

  const card = flashcards[currentCard];
  const totalCards = flashcards.length;

  const nextCard = () => {
    setShowAnswer(false);
    setCurrentCard((prev) => (prev + 1) % totalCards);
  };

  const prevCard = () => {
    setShowAnswer(false);
    setCurrentCard((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const restart = () => {
    setCurrentCard(0);
    setShowAnswer(false);
  };

  const randomCard = () => {
    setShowAnswer(false);
    setCurrentCard(Math.floor(Math.random() * totalCards));
  };

  return (
    <div>
      <h2 style={{ color: '#1a5490', fontSize: '2rem', marginBottom: '0.5rem' }}>
        {t.title}
      </h2>
      <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '2rem' }}>
        {t.subtitle}
      </p>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '3rem 2rem',
          borderRadius: '15px',
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
          transition: 'transform 0.3s ease'
        }}>
          <div style={{ fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.9, display: 'flex', justifyContent: 'space-between' }}>
            <span>{t.progress.replace('{{current}}', currentCard + 1).replace('{{total}}', totalCards)}</span>
            <span>{t.chapter} {card.chapter}</span>
          </div>
          
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>{t.question}:</h3>
          <p style={{ fontSize: '1.3rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            {card.question[language]}
          </p>

          {showAnswer && (
            <>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{t.answer}:</h3>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', opacity: 0.95 }}>
                {card.answer[language]}
              </p>
            </>
          )}
        </div>

        <div style={{ 
          marginTop: '2rem', 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button className="btn btn-primary" onClick={prevCard}>
            <FaArrowLeft /> {t.previous}
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => setShowAnswer(!showAnswer)}
            style={{ background: showAnswer ? '#28a745' : '#667eea' }}
          >
            {showAnswer ? t.hideAnswer : t.showAnswer}
          </button>
          <button className="btn btn-primary" onClick={nextCard}>
            {t.next} <FaArrowRight />
          </button>
          <button className="btn btn-secondary" onClick={restart}>
            <FaRedo /> {t.restart}
          </button>
          <button className="btn btn-secondary" onClick={randomCard}>
            <FaRandom /> {t.random}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashCards;

