# 🎓 ACCA F4 Study Guide - Corporate & Business Law

> **Complete interactive study system for ACCA F4 (LW) exam preparation**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/IliyaMar22/iliya_acca_f4_study_guide)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)

---

## 📚 Overview

A comprehensive, interactive study application designed specifically for ACCA F4 (Corporate and Business Law) exam preparation. Features include bilingual support, interactive flashcards, practice quizzes, progress tracking, and a structured 12-week study plan.

**Live Demo**: [Deploy your own →](https://vercel.com/new/clone?repository-url=https://github.com/IliyaMar22/iliya_acca_f4_study_guide)

---

## ✨ Features

### 📖 **Complete Chapter Coverage**
- ✅ **19 Comprehensive Chapters** covering all ACCA F4 syllabus parts (A-H)
- ✅ **1000+ pages** of detailed study material
- ✅ **Priority ratings** for high-yield exam topics
- ✅ **Case law integration** (Salomon, Regal Hastings, Ebrahimi, etc.)

### 🎯 **Interactive Learning Tools**
- ✅ **125 Flashcards** - Bilingual study cards with instant flip
- ✅ **102 Practice Questions** - Multiple choice with detailed explanations
- ✅ **Quiz Module** - 20 random questions per session
- ✅ **Progress Tracker** - Monitor your study completion
- ✅ **Study Planner** - Structured 12-week preparation schedule

### 🌐 **Bilingual Support**
- ✅ **English & Bulgarian** throughout the entire app
- ✅ **Easy language toggle** - Switch with one click
- ✅ **Consistent translations** across all modules

### 📱 **Responsive Design**
- ✅ **Mobile-optimized** - Study on any device
- ✅ **Tablet-friendly** - Perfect for iPad studying
- ✅ **Desktop experience** - Full-featured interface
- ✅ **PWA capabilities** - Install as app

---

## 🚀 Quick Start

### **Deploy to Vercel (Recommended)**

Click the button below to deploy your own instance:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/IliyaMar22/iliya_acca_f4_study_guide)

**Or use the CLI:**

```bash
npm install -g vercel
git clone https://github.com/IliyaMar22/iliya_acca_f4_study_guide.git
cd iliya_acca_f4_study_guide
vercel --prod
```

### **Run Locally**

```bash
# Clone the repository
git clone https://github.com/IliyaMar22/iliya_acca_f4_study_guide.git
cd iliya_acca_f4_study_guide

# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000
```

### **Build for Production**

```bash
npm run build
# Creates optimized build in /build folder (179.72 KB gzipped)
```

---

## 📊 Content Breakdown

### **Part A: Foundations (Ch 1-3)**
- Business, Political & Legal Systems
- International Trade & Conflict of Laws
- ADR & Arbitration

### **Part B: International Transactions (Ch 4-6)**
- International Sale of Goods (CISG)
- Obligations & Risk
- Transportation & Payment

### **Part C: Business Organizations (Ch 7-8)**
- Agency Law
- Partnerships

### **Part D: Formation (Ch 9-11)**
- Corporations & Legal Personality (Salomon case) ⭐
- Company Formation
- Constitution

### **Part E: Capital & Financing (Ch 12-14)**
- Share Capital
- Loan Capital (Debentures)
- Capital Maintenance & Dividend Law ⭐

### **Part F: Management (Ch 15-17)**
- Company Directors ⭐⭐⭐ (Seven Statutory Duties!)
- Other Officers (Secretary & Auditor)
- Meetings & Resolutions ⭐

### **Part G: Insolvency (Ch 18)**
- Liquidation & Administration

### **Part H: Financial Crime (Ch 19)**
- Insider Dealing (Criminal) vs. Market Abuse (Civil) ⭐
- Money Laundering
- Bribery
- Fraudulent & Wrongful Trading

---

## 🎯 Key Exam Topics

### **Most Critical (⭐⭐⭐⭐⭐)**
1. **Chapter 15: Directors' Duties** - Seven statutory duties (s.171-177)
2. **Chapter 17: Meetings & Resolutions** - Three resolution types
3. **Chapter 19: Financial Crime** - INSIDER DEALING = CRIMINAL, MARKET ABUSE = CIVIL
4. **Chapter 9: Separate Legal Personality** - Salomon v Salomon, lifting the veil

### **High Priority (⭐⭐⭐⭐)**
- Chapter 12: Share Capital (types, pre-emption, cannot issue at discount)
- Chapter 13: Loan Capital (fixed vs. floating charges, crystallization)
- Chapter 14: Capital Maintenance (distributable profits formula)
- Chapter 18: Insolvency (three liquidation types, compulsory grounds)

---

## 🛠️ Technology Stack

- **Frontend**: React 19.2.0
- **Routing**: React Router DOM 7.9.4
- **Icons**: React Icons 5.5.0
- **Build Tool**: Create React App
- **Deployment**: Vercel-ready
- **Size**: 179.72 KB (gzipped)

---

## 📁 Project Structure

```
acca-f4-study-app/
├── public/
│   ├── index.html          # SEO-optimized HTML
│   └── manifest.json       # PWA configuration
├── src/
│   ├── components/
│   │   ├── Dashboard.js    # Main dashboard
│   │   ├── ChapterList.js  # Chapter overview
│   │   ├── ChapterView.js  # Individual chapter
│   │   ├── FlashCards.js   # Flashcard module
│   │   ├── QuizModule.js   # Quiz interface
│   │   ├── ProgressTracker.js  # Progress tracking
│   │   └── StudyPlanner.js     # 12-week plan
│   ├── data/
│   │   ├── chaptersData.js     # All 19 chapters
│   │   ├── flashcardsData.js   # 125 flashcards
│   │   └── quizData.js         # 102 questions
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
├── vercel.json             # Vercel configuration
├── deploy.sh               # Automated deployment
└── README.md               # This file
```

---

## 🎓 Study Recommendations

### **12-Week Study Plan**
- **Weeks 1-2**: Parts A & B (International context)
- **Weeks 3-5**: Parts C & D (Business organizations)
- **Weeks 6-8**: Part E (Capital & financing)
- **Weeks 9-10**: Part F (Management) - Focus on Chapter 15!
- **Week 11**: Parts G & H (Insolvency & crime)
- **Week 12**: Revision & mock exams

### **Daily Study Routine**
1. **Read chapter** - 30-45 minutes
2. **Review flashcards** - 15 minutes
3. **Take quiz** - 20 questions (10 minutes)
4. **Track progress** - Mark completion
5. **Repeat** until confident

---

## 🐛 Bug Fixes

### **Latest Updates**
- ✅ **Quiz scoring bug fixed** - No more impossible scores (22/20)
- ✅ **Duplicate data keys removed** - Chapters 3 & 4 cleaned
- ✅ **Build optimization** - Zero errors, zero warnings
- ✅ **Responsive improvements** - Better mobile experience

---

## 📝 License

MIT License - feel free to use for your ACCA studies!

---

## 🤝 Contributing

Contributions welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/IliyaMar22/iliya_acca_f4_study_guide/issues)
- **Discussions**: [GitHub Discussions](https://github.com/IliyaMar22/iliya_acca_f4_study_guide/discussions)

---

## 🎉 Acknowledgments

- **ACCA** for the excellent F4 syllabus
- **React** team for the amazing framework
- **Vercel** for seamless deployment
- All contributors and users

---

## 📊 Stats

![GitHub repo size](https://img.shields.io/github/repo-size/IliyaMar22/iliya_acca_f4_study_guide)
![GitHub last commit](https://img.shields.io/github/last-commit/IliyaMar22/iliya_acca_f4_study_guide)
![GitHub stars](https://img.shields.io/github/stars/IliyaMar22/iliya_acca_f4_study_guide?style=social)

---

## 🚀 Ready to Study?

**[Deploy Your Own →](https://vercel.com/new/clone?repository-url=https://github.com/IliyaMar22/iliya_acca_f4_study_guide)**

---

**Good luck with your ACCA F4 exam!** 📚⚖️✨

---

*Built with ❤️ for ACCA students worldwide*
