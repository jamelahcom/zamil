import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import './StudyBuddy.css'; // Import the CSS file

const StudyBuddy = () => {
  const [currentStep, setCurrentStep] = useState('questionnaire');
  const [studyPlan, setStudyPlan] = useState(null);

  const renderStep = () => {
    switch(currentStep) {
      case 'questionnaire':
        return <Questionnaire onComplete={handleQuestionnaireComplete} />;
      case 'studyPlan':
        return <StudyPlan plan={studyPlan} />;
      default:
        return <div>Unknown step</div>;
    }
  };

  const handleQuestionnaireComplete = (plan) => {
    setStudyPlan(plan);
    setCurrentStep('studyPlan');
  };

  return (
    <div className="min-h-screen p-8 bg-gradient">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">StudyBuddy Pro</h1>
        {renderStep()}
      </div>
    </div>
  );
};

const Questionnaire = ({ onComplete }) => {
  const [subject, setSubject] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [days, setDays] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject || !difficulty || !days || !hoursPerDay) {
      setError('Please fill out all fields');
      return;
    }
    if (days < 1 || days > 30) {
      setError('Please enter a number of days between 1 and 30');
      return;
    }
    if (hoursPerDay < 1 || hoursPerDay > 12) {
      setError('Please enter hours per day between 1 and 12');
      return;
    }
    setError('');
    const plan = generateStudyPlan(subject, difficulty, days, hoursPerDay);
    onComplete(plan);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold text-purple-600">Plan Your Study Adventure!</h2>
    
      <div>
        <label className="block mb-2">How challenging is your subject?</label>
        <select 
          value={difficulty} 
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Hard</option>
        </select>
      </div>
      <div>
        <label className="block mb-2">How many days do you want to study?</label>
        <input 
          type="number" 
          value={days} 
          onChange={(e) => setDays(e.target.value)}
          className="w-full p-2 border rounded"
          min="1" 
          max="30"
        />
      </div>
      <div>
        <label className="block mb-2">How many hours can you study per day?</label>
        <input 
          type="number" 
          value={hoursPerDay} 
          onChange={(e) => setHoursPerDay(e.target.value)}
          className="w-full p-2 border rounded"
          min="1" 
          max="12"
        />
      </div>
      {error && <Alert message={error} />}
      <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition duration-300">
        Generate My Study Schedule!
      </button>
    </form>
  );
};

const StudyPlan = ({ plan }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-purple-600">Your Personalized Study Schedule</h2>
    <div className="bg-purple-100 p-4 rounded-lg">
      <h3 className="font-semibold mb-2">Subject: {plan.subject}</h3>
      <p>Difficulty: {plan.difficulty}</p>
      <p>Duration: {plan.days} days</p>
      <p>Daily Study Time: {plan.hoursPerDay} hours</p>
    </div>
    <div>
      <h3 className="font-semibold mb-2">Daily Schedule:</h3>
      <ul className="list-disc pl-5 space-y-2">
        {plan.schedule.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <p className="mt-4 italic">Remember, consistency is key! Adjust this schedule as needed to fit your learning style and other commitments. You've got this! 💪📚</p>
  </div>
);

const Alert = ({ message }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <AlertCircle className="inline mr-2" size={20} />
    <span className="block sm:inline">{message}</span>
  </div>
);

// Helper function to generate study plan
const generateStudyPlan = (subject, difficulty, days, hoursPerDay) => {
  const difficultyEmoji = {
    'easy': '😊',
    'medium': '🤔',
    'hard': '🧠💪'
  };

  const topics = {
    'easy': ['Introduction', 'Basic Concepts', 'Fundamental Principles', 'Simple Applications'],
    'medium': ['Advanced Concepts', 'Theoretical Foundations', 'Practical Applications', 'Case Studies'],
    'hard': ['Complex Theories', 'In-depth Analysis', 'Research Methodologies', 'Cutting-edge Developments']
  };

  const schedule = [];
  const selectedTopics = topics[difficulty];
  
  for (let i = 0; i < days; i++) {
    const dayTopic = selectedTopics[i % selectedTopics.length];
    schedule.push(`Day ${i + 1}: ${dayTopic} (${hoursPerDay} hours)`);
  }

  return {
    subject,
    difficulty,
    days,
    hoursPerDay,
    schedule
  };
};

export default StudyBuddy;
