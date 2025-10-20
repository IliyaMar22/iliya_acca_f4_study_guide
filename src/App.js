import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import ChapterList from './components/ChapterList';
import ChapterView from './components/ChapterView';
import FlashCards from './components/FlashCards';
import QuizModule from './components/QuizModule';
import ProgressTracker from './components/ProgressTracker';
import StudyPlanner from './components/StudyPlanner';
import { FaHome, FaBook, FaChartLine, FaCalendar, FaGraduationCap, FaLanguage } from 'react-icons/fa';

function App() {
  const [language, setLanguage] = useState('en'); // 'en' or 'bg'
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'bg' : 'en');
  };

  const translations = {
    en: {
      title: 'ACCA F4 Study System',
      subtitle: 'Corporate and Business Law',
      dashboard: 'Dashboard',
      chapters: 'Chapters',
      flashcards: 'Flashcards',
      quiz: 'Quiz',
      progress: 'Progress',
      planner: 'Study Planner',
      language: 'Switch to Bulgarian'
    },
    bg: {
      title: 'ACCA F4 Система за Учене',
      subtitle: 'Корпоративно и Бизнес Право',
      dashboard: 'Табло',
      chapters: 'Глави',
      flashcards: 'Карти за Учене',
      quiz: 'Тест',
      progress: 'Напредък',
      planner: 'План за Учене',
      language: 'Switch to English'
    }
  };

  const t = translations[language];

  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <div className="header-content">
            <div className="logo-section">
              <FaGraduationCap className="logo-icon" />
              <div>
                <h1>{t.title}</h1>
                <p className="subtitle">{t.subtitle}</p>
              </div>
            </div>
            <button onClick={toggleLanguage} className="language-toggle">
              <FaLanguage /> {t.language}
            </button>
          </div>
        </header>

        <div className="app-container">
          <nav className="sidebar">
            <Link to="/" className="nav-item">
              <FaHome /> {t.dashboard}
            </Link>
            <Link to="/chapters" className="nav-item">
              <FaBook /> {t.chapters}
            </Link>
            <Link to="/flashcards" className="nav-item">
              <FaBook /> {t.flashcards}
            </Link>
            <Link to="/quiz" className="nav-item">
              <FaBook /> {t.quiz}
            </Link>
            <Link to="/progress" className="nav-item">
              <FaChartLine /> {t.progress}
            </Link>
            <Link to="/planner" className="nav-item">
              <FaCalendar /> {t.planner}
            </Link>
          </nav>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard language={language} />} />
              <Route path="/chapters" element={<ChapterList language={language} />} />
              <Route path="/chapter/:id" element={<ChapterView language={language} />} />
              <Route path="/flashcards" element={<FlashCards language={language} />} />
              <Route path="/quiz" element={<QuizModule language={language} />} />
              <Route path="/progress" element={<ProgressTracker language={language} />} />
              <Route path="/planner" element={<StudyPlanner language={language} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
