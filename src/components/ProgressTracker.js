import React from 'react';
import { FaClock } from 'react-icons/fa';

const ProgressTracker = ({ language }) => {
  const translations = {
    en: { title: 'Your Progress', completed: 'Completed', inProgress: 'In Progress', notStarted: 'Not Started' },
    bg: { title: 'Вашият Напредък', completed: 'Завършени', inProgress: 'В Процес', notStarted: 'Не Започнати' }
  };

  const t = translations[language];

  return (
    <div>
      <h2 style={{ color: '#1a5490', marginBottom: '2rem' }}>{t.title}</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {[...Array(19)].map((_, i) => (
          <div key={i} style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Chapter {i + 1}</span>
            <span style={{ color: '#999' }}><FaClock /> {t.notStarted}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
