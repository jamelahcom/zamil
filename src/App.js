import React from 'react';
import FAQSummary from './components/FAQSummary';
import FileUpload from './components/FileUpload';
import QuizGame from './components/QuizGame';
import './App.css';

function App() {
  return (
    <div className="App">
      <FileUpload />
      <FAQSummary />
      <QuizGame />
    </div>
  );
}

export default App;
