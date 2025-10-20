import React from 'react';
import { FaCalendar } from 'react-icons/fa';

const StudyPlanner = () => {
  const translations = {
    en: { title: '12-Week Study Plan', week: 'Week' },
    bg: { title: '12-Седмичен План за Учене', week: 'Седмица' }
  };

  const t = translations;

  const schedule = [
    { week: '1-2', focus: 'Foundations (Part A)', chapters: '1-3' },
    { week: '3', focus: 'International Sales (Part B)', chapters: '4-5' },
    { week: '4', focus: 'Transport & Agency', chapters: '6-7' },
    { week: '5-6', focus: 'Business Organizations', chapters: '8-11' },
    { week: '7-8', focus: 'Capital (HIGH PRIORITY)', chapters: '12-14' },
    { week: '9-10', focus: 'Management (HIGH PRIORITY)', chapters: '15-17' },
    { week: '11', focus: 'Insolvency & Fraud', chapters: '18-19' },
    { week: '12', focus: 'REVISION', chapters: 'All' }
  ];

  return (
    <div>
      <h2 style={{ color: '#1a5490', marginBottom: '2rem' }}><FaCalendar /> {t.title}</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {schedule.map((item, i) => (
          <div key={i} style={{ background: i >= 6 ? '#ffe6e6' : '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: i >= 6 ? '2px solid #ff6b6b' : 'none' }}>
            <strong>{t.week} {item.week}:</strong> {item.focus} <span style={{ color: '#666' }}>(Chapters {item.chapters})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyPlanner;
