import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';

const ChapterList = ({ language }) => {
  const navigate = useNavigate();

  const translations = {
    en: {
      title: 'All Chapters',
      subtitle: 'Browse all 19 chapters of ACCA F4 Corporate and Business Law',
      viewChapter: 'View Chapter',
      part: 'Part',
      chapter: 'Chapter'
    },
    bg: {
      title: 'Всички Глави',
      subtitle: 'Прегледайте всички 19 глави на ACCA F4 Корпоративно и Бизнес Право',
      viewChapter: 'Виж Главата',
      part: 'Част',
      chapter: 'Глава'
    }
  };

  const t = translations[language];

  const chapters = [
    { num: 1, title: 'Business, Political and Legal Systems', part: 'A', priority: '⭐⭐⭐' },
    { num: 2, title: 'International Trade, Legal Regulation and Conflict of Laws', part: 'A' },
    { num: 3, title: 'Court-based Adjudication and Alternative Dispute Resolution', part: 'A' },
    { num: 4, title: 'Contracts for the International Sale of Goods', part: 'B' },
    { num: 5, title: 'Obligations and Risk in Contracts for International Sales', part: 'B' },
    { num: 6, title: 'Transportation Documents and Means of Payment', part: 'C' },
    { num: 7, title: 'Agency Law', part: 'D' },
    { num: 8, title: 'Partnerships', part: 'D' },
    { num: 9, title: 'Corporations and Legal Personality', part: 'D', priority: '⭐⭐⭐' },
    { num: 10, title: 'Company Formation', part: 'D' },
    { num: 11, title: 'Constitution of a Company', part: 'D' },
    { num: 12, title: 'Share Capital', part: 'E', priority: '⭐⭐⭐' },
    { num: 13, title: 'Loan Capital', part: 'E' },
    { num: 14, title: 'Capital Maintenance and Dividend Law', part: 'E', priority: '⭐⭐⭐' },
    { num: 15, title: 'Company Directors', part: 'F', priority: '⭐⭐⭐' },
    { num: 16, title: 'Other Company Officers', part: 'F' },
    { num: 17, title: 'Company Meetings and Resolutions', part: 'F' },
    { num: 18, title: 'Insolvency and Administration', part: 'G' },
    { num: 19, title: 'Fraudulent and Criminal Behaviour', part: 'H' }
  ];

  const titlesBG = {
    1: 'Бизнес, Политически и Правни Системи',
    2: 'Международна Търговия, Правна Регулация и Конфликт на Законите',
    3: 'Съдебно Решаване и Алтернативно Решаване на Спорове',
    4: 'Договори за Международна Продажба на Стоки',
    5: 'Задължения и Риск в Договорите за Международна Продажба',
    6: 'Транспортни Документи и Начини на Плащане',
    7: 'Право на Представителство',
    8: 'Партньорства',
    9: 'Корпорации и Правна Личност',
    10: 'Формиране на Компания',
    11: 'Устройство на Компанията',
    12: 'Акционерен Капитал',
    13: 'Заемен Капитал',
    14: 'Поддържане на Капитала и Закон за Дивидентите',
    15: 'Директори на Компании',
    16: 'Други Служители на Компанията',
    17: 'Събрания и Решения на Компании',
    18: 'Несъстоятелност и Администрация',
    19: 'Измамно и Престъпно Поведение'
  };

  return (
    <div className="chapter-list">
      <h2 style={{ color: '#1a5490', fontSize: '2rem', marginBottom: '0.5rem' }}>
        {t.title}
      </h2>
      <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '2rem' }}>
        {t.subtitle}
      </p>

      <div className="chapter-grid">
        {chapters.map((chapter) => (
          <div key={chapter.num} className="chapter-card">
            <span className="chapter-number">
              {t.part} {chapter.part} • {t.chapter} {chapter.num}
            </span>
            <h3>{language === 'en' ? chapter.title : titlesBG[chapter.num]}</h3>
            {chapter.priority && (
              <div style={{ 
                color: '#f39c12', 
                fontSize: '1.2rem', 
                marginTop: '0.5rem',
                fontWeight: 'bold' 
              }}>
                {chapter.priority} High Priority
              </div>
            )}
            <div className="chapter-meta">
              <button
                className="btn btn-primary"
                style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                onClick={() => navigate(`/chapter/${chapter.num}`)}
              >
                <FaBook /> {t.viewChapter}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterList;

