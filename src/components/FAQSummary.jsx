import React from 'react';
import './FAQSummary.css';

const FAQSummary = () => {
  return (
    <div className="faq-summary">
      <div className="breadcrumb">
        <span>Home</span> / <span>FAQs</span>
      </div>
      <h1 className="title">Review</h1>
      <div className="faq-list">
        <div className="faq-item">
          <h2>How to calculate eq in slide 11</h2>
          <p>Content for slide 11 calculation...</p>
        </div>
        <div className="faq-item">
          <h2>All the chapter equations</h2>
          <p>List of all chapter equations...</p>
        </div>
        {/* Additional FAQ items */}
      </div>
    </div>
  );
};

export default FAQSummary;
