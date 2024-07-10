import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQSummary.css'; // Import the CSS file

const FAQItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="faq-item border-b border-gray-200">
      <button
        className={`faq-item-button ${isOpen ? 'bg-gray-100' : ''}`}
        onClick={onClick}
      >
        <span className={`faq-item-title ${isOpen ? 'open' : ''}`}>{title}</span>
        {isOpen ? <ChevronUp size={20} className="faq-item-icon open" /> : <ChevronDown size={20} className="faq-item-icon" />}
      </button>
      {isOpen && (
        <div className="faq-item-content">
          <div className="text-gray-700">{content}</div>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
