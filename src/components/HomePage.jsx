import React from 'react';
import FileUpload from './FileUpload';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <nav className="nav">
          <a href="#home" className="nav-item active">Home</a>
          <a href="#about" className="nav-item">About Us</a>
          <a href="#features" className="nav-item">Features</a>
          <a href="#pricing" className="nav-item">Pricing</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>
        <div className="auth">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>
      <main className="main">
        <div className="intro">
          <h1 className="title">Start Learning with Zamil AI-powerd system</h1>
          <p className="subtitle">See how you can power your whole study map.</p>
          <button className="see-action-btn">See our services </button>
        </div>
        <div className="file-upload-section">
          <FileUpload />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
