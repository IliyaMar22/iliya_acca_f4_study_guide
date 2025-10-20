import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBook } from 'react-icons/fa';
import { getChapterData } from '../data/chaptersData';

const ChapterView = ({ language }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chapterData = getChapterData(parseInt(id));

  const translations = {
    en: { back: 'Back to Chapters', summary: 'Chapter Summary', keyPoints: 'Key Points', questions: 'Practice Questions' },
    bg: { back: 'Назад към Главите', summary: 'Резюме на Главата', keyPoints: 'Ключови Точки', questions: 'Практически Въпроси' }
  };

  const t = translations[language];

  return (
    <div>
      <button className="btn btn-secondary" onClick={() => navigate('/chapters')}>
        <FaArrowLeft /> {t.back}
      </button>
      
      <div style={{ margin: '2rem 0' }}>
        <h2 style={{ color: '#1a5490', fontSize: '2rem', marginBottom: '0.5rem' }}>
          <FaBook /> Chapter {id}: {chapterData.title[language]}
        </h2>
        {chapterData.priority && (
          <span style={{ color: '#f39c12', fontSize: '1.2rem', fontWeight: 'bold' }}>
            {chapterData.priority} High Priority
          </span>
        )}
      </div>

      {/* Summary Section */}
      <div style={{ 
        marginTop: '2rem', 
        padding: '2.5rem', 
        background: '#f8f9fa', 
        borderRadius: '12px', 
        border: '2px solid #e0e0e0',
        minHeight: '300px'
      }}>
        <h3 style={{ 
          color: '#1a5490', 
          marginBottom: '1.5rem', 
          fontSize: '1.5rem',
          borderBottom: '3px solid #667eea',
          paddingBottom: '0.5rem'
        }}>
          📖 {t.summary}
        </h3>
        <div style={{ 
          lineHeight: '1.9', 
          fontSize: '1.1rem', 
          textAlign: 'justify', 
          color: '#333',
          maxWidth: '100%',
          wordWrap: 'break-word'
        }}>
          {chapterData.summary[language]}
        </div>
      </div>

      {/* Key Points Section */}
      {chapterData.keyPoints && chapterData.keyPoints.length > 0 && (
        <div style={{ 
          marginTop: '2rem', 
          padding: '2.5rem', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
          color: 'white', 
          borderRadius: '12px',
          minHeight: '200px'
        }}>
          <h3 style={{ 
            marginBottom: '1.5rem', 
            fontSize: '1.5rem',
            borderBottom: '3px solid rgba(255,255,255,0.3)',
            paddingBottom: '0.5rem'
          }}>
            🔑 {t.keyPoints}
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {chapterData.keyPoints.map((point, idx) => (
              <li key={idx} style={{ 
                padding: '1rem 0', 
                borderBottom: idx < chapterData.keyPoints.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none', 
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>
                <strong>✓</strong> {point[language]}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Questions Section */}
      {chapterData.questions && chapterData.questions.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#1a5490', marginBottom: '1rem' }}>{t.questions}</h3>
          {chapterData.questions.map((q, idx) => (
            <div key={idx} style={{ marginBottom: '2rem', padding: '1.5rem', background: '#fff', border: '2px solid #e0e0e0', borderRadius: '12px' }}>
              <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>Q{idx + 1}: {q.question[language]}</h4>
              <p style={{ lineHeight: '1.6', color: '#333' }}><strong>Answer:</strong> {q.answer[language]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChapterView;
