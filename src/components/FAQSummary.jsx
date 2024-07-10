import React, { useState } from 'react';
import FAQItem from './FAQItem';
import './FAQSummary.css'; // Import the CSS file

const FAQSummary = () => {
  const [openItem, setOpenItem] = useState(3);  // Set the fourth item open by default

  const faqItems = [
    {
      title: "how to cal eq in slide 11",
      content: "Content for slide 11 calculation..."
    },
    {
      title: "all the chapter equation",
      content: "List of all chapter equations..."
    },
    {
      title: "Etiam a nisl dui. Integer sed eros sed leo blandit interdum eget nec",
      content: "Explanation for this topic..."
    },
    {
      title: "Nulla id ligula ligula.",
      content: (
        <div>
          <p>Aliquam semper tellus vel lacus rutrum mollis. Nunc vitae iaculis lacus, id fringilla leo. Nulla dictum, enim nec bibendum auctor, lorem mi rutrum urna, sed luctus urna nibh sit amet velit. Sed varius sem semper leo ultricies tincidunt. Etiam id ligula ut augue auctor molestie ut quis felis.</p>
          <ol className="list-decimal pl-5 mt-3">
            <li>Sed lorem elit, aliquam vel neque condimentum, blandit cursus nisi.</li>
            <li>Cras ullamcorper posuere felis et vehicula.</li>
            <li>Donec dignissim metus felis, non posuere arcu finibus a.</li>
          </ol>
          <p className="mt-3">Sed interdum dignissim odio, vitae mollis nisi congue nec. Ut tellus metus, posuere vel odio ut, ullamcorper rutrum ex. Curabitur porttitor sem nec felis mollis, nec laoreet leo iaculis.</p>
          <ul className="list-disc pl-5 mt-3">
            <li>Donec ut massa</li>
            <li>ac magna iaculis imperdiet ut viverra arcu.</li>
          </ul>
          <p className="mt-3">Proin quis elementum velit, eget efficitur nulla. Donec tellus massa, faucibus id nulla sit amet, feugiat viverra justo. Curabitur auctor nibh ut ante lacinia, ac finibus sem pulvinar. Suspendisse vestibulum in dolor eget sodales. Curabitur justo risus, vehicula ac mollis sit amet, gravida sed erat.</p>
        </div>
      )
    },
    {
      title: "Etiam non tellus non dolor suscipit vehicula.",
      content: "Explanation for this topic..."
    },
    {
      title: "Vestibulum pellentesque ex magna.",
      content: "Details about this subject..."
    },
    {
      title: "Ut ullamcorper est sit amet quam aliquet mattis.",
      content: "Information related to this topic..."
    }
  ];

  return (
    <div className="faq-summary max-w-3xl mx-auto bg-gray-100 min-h-screen px-4 py-8">
      <div className="mb-2">
        <div className="text-sm text-gray-600">
          <a href="#" className="hover:underline">Home</a> / <span>FAQs</span>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-8">Review</h1>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        {faqItems.map((item, index) => (
          <FAQItem 
            key={index} 
            title={item.title} 
            content={item.content} 
            isOpen={openItem === index}
            onClick={() => setOpenItem(openItem === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSummary;
