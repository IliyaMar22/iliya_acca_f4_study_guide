import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBook } from 'react-icons/fa';
import { getChapterData } from '../data/chaptersData';

const ChapterView = ({ language }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chapterData = getChapterData(parseInt(id));
  const [aiEnrichment, setAiEnrichment] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  const translations = {
    en: {
      back: 'Back to Chapters',
      summary: 'Chapter Summary',
      keyPoints: 'Key Points',
      questions: 'Practice Questions',
      claudeTitle: 'Claude Deep Dive',
      claudeSubtitle: 'Get additional insights and exam-ready context powered by Claude.',
      claudeButton: 'Enrich with Claude',
      claudeLoading: 'Requesting deeper insights…',
      claudeError: 'Unable to retrieve additional details right now.',
      claudeRetry: 'Try again'
    },
    bg: {
      back: 'Назад към Главите',
      summary: 'Резюме на Главата',
      keyPoints: 'Ключови Точки',
      questions: 'Практически Въпроси',
      claudeTitle: 'Разширен Анализ от Claude',
      claudeSubtitle: 'Обогатете съдържанието с допълнителни пояснения и контекст за изпита.',
      claudeButton: 'Обогати с Claude',
      claudeLoading: 'Заявката се обработва…',
      claudeError: 'В момента не може да се извлече допълнителна информация.',
      claudeRetry: 'Опитайте отново'
    }
  };

  const t = translations[language];

  const handleClaudeEnrichment = async () => {
    try {
      setAiLoading(true);
      setAiError('');
      setAiEnrichment('');

      const response = await fetch('/api/claude/enrich', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chapterNumber: parseInt(id, 10),
          summary: chapterData.summary[language],
          language
        })
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        const errorMessage = errorBody?.error || `HTTP ${response.status}: ${response.statusText}`;
        console.error('Claude API error:', errorBody);
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setAiEnrichment(data.enrichment || '');
    } catch (error) {
      console.error('Claude enrichment error:', error);
      setAiError(error.message || 'Unknown error. Check browser console for details.');
    } finally {
      setAiLoading(false);
    }
  };

  const renderEnrichment = () => {
    if (!aiEnrichment) return null;

    return aiEnrichment
      .split('\n')
      .filter(paragraph => paragraph.trim().length > 0)
      .map((paragraph, idx) => (
        <p key={`${idx}-${paragraph.slice(0, 20)}`} style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
          {paragraph}
        </p>
      ));
  };

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

      {/* Claude Enrichment Section */}
      <div style={{
        marginTop: '2rem',
        padding: '2.5rem',
        background: '#ffffff',
        borderRadius: '12px',
        border: '2px dashed #cbd5f5',
        boxShadow: '0 12px 24px rgba(102, 126, 234, 0.08)'
      }}>
        <h3 style={{
          color: '#1a5490',
          marginBottom: '0.75rem',
          fontSize: '1.5rem'
        }}>
          🤖 {t.claudeTitle}
        </h3>
        <p style={{ color: '#4a4a4a', marginBottom: '1.5rem', fontSize: '1rem' }}>
          {t.claudeSubtitle}
        </p>
        <button
          className="btn btn-primary"
          onClick={handleClaudeEnrichment}
          disabled={aiLoading}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: aiLoading ? '#6c757d' : '#667eea',
            border: 'none',
            borderRadius: '999px',
            fontSize: '1rem',
            cursor: aiLoading ? 'wait' : 'pointer'
          }}
        >
          {aiLoading ? t.claudeLoading : t.claudeButton}
        </button>

        {aiError && (
          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: '#fff5f5',
            border: '1px solid #ffcccc',
            borderRadius: '8px',
            color: '#d14343'
          }}>
            <strong>{t.claudeError}</strong>
            <div style={{ marginTop: '0.5rem' }}>
              <button
                className="btn btn-link"
                onClick={handleClaudeEnrichment}
                disabled={aiLoading}
                style={{ color: '#d14343', textDecoration: 'underline', border: 'none', background: 'transparent', padding: 0 }}
              >
                {t.claudeRetry}
              </button>
            </div>
          </div>
        )}

        {aiEnrichment && (
          <div style={{
            marginTop: '1.75rem',
            padding: '1.75rem',
            background: '#f0f4ff',
            borderRadius: '12px',
            border: '1px solid rgba(102,126,234,0.35)',
            color: '#1f2d5c'
          }}>
            {renderEnrichment()}
          </div>
        )}
      </div>

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
