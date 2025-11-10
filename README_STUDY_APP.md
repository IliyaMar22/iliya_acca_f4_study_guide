# ACCA F4 Interactive Study App

## 🎓 Your Complete Learning Platform

A beautiful, user-friendly React application for studying ACCA F4 Corporate and Business Law.

---

## ✨ Features

### 🌐 **Bilingual Support**
- Full English & Bulgarian translation
- Toggle between languages with one click
- All content available in both languages

### 📚 **Chapter Browser**
- Browse all 19 chapters
- View chapter summaries
- Download PDF reports for each chapter
- Priority markers for important chapters

### 🃏 **Interactive Flashcards**
- 150+ flashcards covering all topics
- Flip cards to reveal answers
- Navigate forward/backward
- Progress tracking

### 📝 **Quiz Module**
- Practice questions with multiple choice
- Instant feedback on answers
- Score tracking
- Bilingual questions and answers

### 📊 **Progress Tracker**
- Track completed chapters
- Monitor study time
- View completion statistics
- Visual progress indicators

### 📅 **12-Week Study Planner**
- Structured learning schedule
- Weekly focus areas
- Prioritized chapters
- Exam preparation timeline

### 💡 **Smart Dashboard**
- Quick stats overview
- Recent activity
- Study tips
- Quick action buttons

### 🤖 **AI-Powered Enrichment**
- Claude integration expands each summary on demand
- Focused examiner tips, case references, and self-test prompts
- Works in both English and Bulgarian, respecting the chapter language

---

## 🚀 How to Use

### **1. Install Dependencies**

```bash
cd acca-f4-study-app
npm install
```

### **2. Configure Claude Access**

Create a `.env` file in `acca-f4-study-app/` (same folder as `package.json`) and add:

```bash
CLAUDE_API_KEY=your_anthropic_key_here
# Optional overrides:
# PORT=5001
# CLIENT_ORIGIN=http://localhost:3000
# CLAUDE_MODEL=claude-3-5-sonnet-20241022
```

> ⚠️ Never hard-code the API key in React files or commit it to Git. Keep it in the `.env` file or your deployment secret manager.

### **3. Start the Claude Proxy (Terminal #1)**

```bash
cd acca-f4-study-app
npm run server
```

This boots the secure Express proxy on `http://localhost:5001`.

### **4. Start the React App (Terminal #2)**

```bash
cd acca-f4-study-app
npm start
```

The frontend opens at `http://localhost:3000` and automatically proxies `/api/claude/*` requests to the backend.

### **Building for Production:**

```bash
npm run build
```

---

## 📱 App Structure

```
acca-f4-study-app/
├── src/
│   ├── components/
│   │   ├── Dashboard.js         # Main dashboard
│   │   ├── ChapterList.js       # Browse all chapters
│   │   ├── ChapterView.js       # View individual chapter
│   │   ├── FlashCards.js        # Interactive flashcards
│   │   ├── QuizModule.js        # Practice quizzes
│   │   ├── ProgressTracker.js   # Track your progress
│   │   └── StudyPlanner.js      # 12-week study plan
│   ├── App.js                    # Main app component
│   └── App.css                   # Styles
└── public/
    └── PDF_Reports/               # Chapter PDF reports
```

---

## 🎨 Color Scheme

- **Primary**: `#667eea` (Purple-blue gradient)
- **Secondary**: `#764ba2` (Deep purple)
- **Success**: `#28a745` (Green)
- **Warning**: `#f39c12` (Orange)
- **Info**: `#1a5490` (Dark blue)

---

## 🔧 Technologies Used

- **React 18** - Frontend framework
- **React Router** - Navigation
- **React Icons** - Beautiful icons
- **CSS3** - Modern styling with gradients
- **Responsive Design** - Works on all devices

---

## 📖 User Guide

### **Navigation:**
- Use the sidebar to navigate between sections
- Click on chapter cards to view details
- Download PDFs directly from chapter pages

### **Language Toggle:**
- Click the language button in the header
- All content instantly switches to Bulgarian/English

### **Flashcards:**
- Click "Show Answer" to reveal the answer
- Use Next/Previous to navigate cards
- Click "Restart" to begin from card 1

### **Quiz:**
- Select an answer to see if you're correct
- Green checkmark = correct, Red X = incorrect
- Complete all questions to see your score

### **Progress Tracking:**
- Automatically tracks chapters you've completed
- View your study time and statistics
- Monitor your learning journey

---

## 🎯 Study Tips

1. **Daily Routine:** Spend 30-45 minutes daily
2. **Morning:** Review 20-30 flashcards (20 min)
3. **Evening:** Study chapter + answer questions (25 min)
4. **Weekly:** Review completed chapters on Sundays
5. **Use Both Languages:** Reinforce learning by switching languages

---

## 📚 Integrating with PDF Reports

All chapter PDF reports are located in: `/Users/bilyana/Downloads/.github-main/profile/PDF_Reports/`

Each PDF includes:
- ✅ English Summary
- ✅ Bulgarian Summary
- ✅ Key Points (Bilingual)
- ✅ Practice Questions (Bilingual)
- ✅ Detailed Answers

---

## 🐛 Troubleshooting

**Claude call returns 500?**
- Confirm `CLAUDE_API_KEY` is present in `.env`
- Check that the proxy server in Terminal #1 has not crashed
- Review console output for Anthropic error messages (rate limits, quota, etc.)

**Port already in use?**
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill
npm start
```

**Dependencies missing?**
```bash
npm install
```

**PDF downloads not working?**
- Ensure PDF files are in `public/PDF_Reports/` folder
- Check file permissions

---

## 🌟 Future Enhancements

- [ ] Save progress to localStorage
- [ ] Export progress reports
- [ ] More quiz questions per chapter
- [ ] Timed practice exams
- [ ] Study streak tracker
- [ ] Dark mode
- [ ] Mobile app version

---

## 📞 Support

If you encounter any issues or have suggestions:
1. Check this README
2. Review the component code
3. Ask for help!

---

## 🎉 Success Tips

- **Consistency > Intensity:** 30 min daily beats 3 hours weekly
- **Use All Features:** Don't just read - use flashcards and quizzes
- **Track Progress:** Use the progress tracker to stay motivated
- **Language Practice:** Switch languages regularly
- **Follow the Plan:** The 12-week schedule is designed for success

---

## 📄 License

Created for ACCA F4 study purposes.
Based on BPP ACCA F4 Workbook 2023-2024.

---

## 🎓 Good Luck!

**You have everything you need to pass ACCA F4!**

**Успех на изпита! 🍀📚✨**

---

**Created:** October 2025  
**Version:** 1.0.0  
**React Version:** 18.x  
**Status:** ✅ Production Ready



