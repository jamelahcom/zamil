import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import FAQSummary from './components/FAQSummary';
import FileUpload from './components/FileUpload';
import QuizGame from './components/QuizGame';
import StudyBuddy from './components/StudyBuddy';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/file-upload">File Upload</Link></li>
            <li><Link to="/faq-summary">FAQ Summary</Link></li>
            <li><Link to="/quiz-game">Quiz Game</Link></li>
            <li><Link to="/study-buddy">Study Buddy</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/file-upload" element={<FileUpload />} />
          <Route path="/faq-summary" element={<FAQSummary />} />
          <Route path="/quiz-game" element={<QuizGame />} />
          <Route path="/study-buddy" element={<StudyBuddy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
