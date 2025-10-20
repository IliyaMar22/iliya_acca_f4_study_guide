import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaGraduationCap, FaCheckCircle, FaClock } from 'react-icons/fa';

const Dashboard = ({ language }) => {
  const navigate = useNavigate();

  const translations = {
    en: {
      welcome: 'Welcome to Your ACCA F4 Study System',
      subtitle: 'Your complete learning platform for Corporate and Business Law',
      totalChapters: 'Total Chapters',
      chaptersCompleted: 'Chapters Completed',
      flashcardsReviewed: 'Flashcards Reviewed',
      studyTime: 'Study Time This Week',
      quickActions: 'Quick Actions',
      continueStudying: 'Continue Studying',
      reviewFlashcards: 'Review Flashcards',
      takeQuiz: 'Take a Quiz',
      viewProgress: 'View Progress',
      recentActivity: 'Recent Activity',
      noActivity: 'No recent activity. Start studying now!',
      studyTips: 'Study Tips',
      tip1: '📚 Review flashcards daily for 20 minutes',
      tip2: '✍️ Practice 2-3 questions every evening',
      tip3: '🔗 Link concepts between chapters',
      tip4: '🇧🇬 Practice explaining in both languages',
      chapters: 'chapters',
      hours: 'hours'
    },
    bg: {
      welcome: 'Добре дошли във вашата ACCA F4 система за учене',
      subtitle: 'Вашата пълна учебна платформа за Корпоративно и Бизнес Право',
      totalChapters: 'Общо Глави',
      chaptersCompleted: 'Завършени Глави',
      flashcardsReviewed: 'Прегледани Карти',
      studyTime: 'Време за Учене Тази Седмица',
      quickActions: 'Бързи Действия',
      continueStudying: 'Продължи Ученето',
      reviewFlashcards: 'Прегледай Карти',
      takeQuiz: 'Направи Тест',
      viewProgress: 'Виж Напредък',
      recentActivity: 'Скорошна Активност',
      noActivity: 'Няма скорошна активност. Започнете да учите сега!',
      studyTips: 'Съвети за Учене',
      tip1: '📚 Преглеждайте карти ежедневно по 20 минути',
      tip2: '✍️ Практикувайте 2-3 въпроса всяка вечер',
      tip3: '🔗 Свързвайте концепции между главите',
      tip4: '🇧🇬 Практикувайте обяснения на двата езика',
      chapters: 'глави',
      hours: 'часа'
    }
  };

  const t = translations[language];

  const stats = [
    {
      icon: <FaBook />,
      label: t.totalChapters,
      value: '19',
      subtext: t.chapters,
      color: '#667eea'
    },
    {
      icon: <FaCheckCircle />,
      label: t.chaptersCompleted,
      value: '0',
      subtext: t.chapters,
      color: '#28a745'
    },
    {
      icon: <FaGraduationCap />,
      label: t.flashcardsReviewed,
      value: '0',
      subtext: '/ 150+',
      color: '#ff6b6b'
    },
    {
      icon: <FaClock />,
      label: t.studyTime,
      value: '0',
      subtext: t.hours,
      color: '#f39c12'
    }
  ];

  const quickActions = [
    {
      title: t.continueStudying,
      action: () => navigate('/chapters'),
      color: '#667eea'
    },
    {
      title: t.reviewFlashcards,
      action: () => navigate('/flashcards'),
      color: '#764ba2'
    },
    {
      title: t.takeQuiz,
      action: () => navigate('/quiz'),
      color: '#ff6b6b'
    },
    {
      title: t.viewProgress,
      action: () => navigate('/progress'),
      color: '#f39c12'
    }
  ];

  return (
    <div className="dashboard">
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#1a5490', fontSize: '2rem', marginBottom: '0.5rem' }}>
          {t.welcome}
        </h2>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>{t.subtitle}</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="stat-card"
            style={{ background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}dd 100%)` }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              {stat.icon}
            </div>
            <h3>{stat.label}</h3>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.subtext}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#1a5490', marginBottom: '1rem', fontSize: '1.5rem' }}>
          {t.quickActions}
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="btn btn-primary"
              onClick={action.action}
              style={{ 
                background: `linear-gradient(135deg, ${action.color} 0%, ${action.color}dd 100%)`,
                padding: '1.5rem',
                fontSize: '1.05rem',
                justifyContent: 'center'
              }}
            >
              {action.title}
            </button>
          ))}
        </div>
      </div>

      {/* Study Tips */}
      <div style={{ 
        marginTop: '2rem',
        background: '#f8f9fa',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '2px solid #e0e0e0'
      }}>
        <h3 style={{ color: '#1a5490', marginBottom: '1rem', fontSize: '1.3rem' }}>
          💡 {t.studyTips}
        </h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '0.75rem 0', fontSize: '1.05rem', borderBottom: '1px solid #e0e0e0' }}>
            {t.tip1}
          </li>
          <li style={{ padding: '0.75rem 0', fontSize: '1.05rem', borderBottom: '1px solid #e0e0e0' }}>
            {t.tip2}
          </li>
          <li style={{ padding: '0.75rem 0', fontSize: '1.05rem', borderBottom: '1px solid #e0e0e0' }}>
            {t.tip3}
          </li>
          <li style={{ padding: '0.75rem 0', fontSize: '1.05rem' }}>
            {t.tip4}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

