import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQSummary.css';

const FAQItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <button
        className={`faq-question ${isOpen ? 'open' : ''}`}
        onClick={onClick}
      >
        <span className="faq-title">{title}</span>
        {isOpen ? <ChevronUp size={20} className="chevron" /> : <ChevronDown size={20} className="chevron" />}
      </button>
      {isOpen && (
        <div className="faq-answer">
          {content}
        </div>
      )}
    </div>
  );
};

const FAQSummary = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      title: "how to cal eq in slide 11",
      content: (
        <div>
          <p>Aliquam semper tellus vel lacus rutrum mollis. Nunc vitae iaculis lacus, id fringilla leo. Nulla dictum, enim nec bibendum auctor, lorem mi rutrum urna, sed luctus urna nibh sit amet velit. Sed varius sem semper leo ultricies tincidunt. Etiam id ligula ut augue auctor molestie ut quis felis.</p>
          <ol className="list-decimal pl-5 mt-3">
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

          </ol>
          <p className="mt-3">Sed interdum dignissim odio, vitae mollis nisi congue nec. Ut tellus metus, posuere vel odio ut, ullamcorper rutrum ex. Curabitur porttitor sem nec felis mollis, nec laoreet leo iaculis.</p>
          <ul className="list-disc pl-5 mt-3">
            <li>Donec ut massa</li>
            <li>ac magna iaculis imperdiet ut viverra arcu.</li>
          </ul>
          <p className="mt-3">Proin quis elementum velit, eget efficitur nulla. Donec tellus massa, faucibus id nulla sit amet, feugiat viverra justo. Curabitur auctor nibh ut ante lacinia, ac finibus sem pulvinar. Suspendisse vestibulum in dolor eget sodales. Curabitur justo risus, vehicula ac mollis sit amet, gravida sed erat.</p>
        </div>
      )    },
    {
      title: "all the chapter equation",
      content: (
        <div>
          <p>Aliquam semper tellus vel lacus rutrum mollis. Nunc vitae iaculis lacus, id fringilla leo. Nulla dictum, enim nec bibendum auctor, lorem mi rutrum urna, sed luctus urna nibh sit amet velit. Sed varius sem semper leo ultricies tincidunt. Etiam id ligula ut augue auctor molestie ut quis felis.</p>
          <ol className="list-decimal pl-5 mt-3">
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

          </ol>
          <p className="mt-3">Sed interdum dignissim odio, vitae mollis nisi congue nec. Ut tellus metus, posuere vel odio ut, ullamcorper rutrum ex. Curabitur porttitor sem nec felis mollis, nec laoreet leo iaculis.</p>
          <ul className="list-disc pl-5 mt-3">
            <li>Donec ut massa</li>
            <li>ac magna iaculis imperdiet ut viverra arcu.</li>
          </ul>
          <p className="mt-3">Proin quis elementum velit, eget efficitur nulla. Donec tellus massa, faucibus id nulla sit amet, feugiat viverra justo. Curabitur auctor nibh ut ante lacinia, ac finibus sem pulvinar. Suspendisse vestibulum in dolor eget sodales. Curabitur justo risus, vehicula ac mollis sit amet, gravida sed erat.</p>
        </div>
      )    },
    {
      title: "Etiam a nisl dui. Integer sed eros sed leo blandit interdum eget nec",
      content: (
        <div>
          <p>Aliquam semper tellus vel lacus rutrum mollis. Nunc vitae iaculis lacus, id fringilla leo. Nulla dictum, enim nec bibendum auctor, lorem mi rutrum urna, sed luctus urna nibh sit amet velit. Sed varius sem semper leo ultricies tincidunt. Etiam id ligula ut augue auctor molestie ut quis felis.</p>
          <ol className="list-decimal pl-5 mt-3">
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

          </ol>
          <p className="mt-3">Sed interdum dignissim odio, vitae mollis nisi congue nec. Ut tellus metus, posuere vel odio ut, ullamcorper rutrum ex. Curabitur porttitor sem nec felis mollis, nec laoreet leo iaculis.</p>
          <ul className="list-disc pl-5 mt-3">
            <li>Donec ut massa</li>
            <li>ac magna iaculis imperdiet ut viverra arcu.</li>
          </ul>
          <p className="mt-3">Proin quis elementum velit, eget efficitur nulla. Donec tellus massa, faucibus id nulla sit amet, feugiat viverra justo. Curabitur auctor nibh ut ante lacinia, ac finibus sem pulvinar. Suspendisse vestibulum in dolor eget sodales. Curabitur justo risus, vehicula ac mollis sit amet, gravida sed erat.</p>
        </div>
      )    },
    {
      title: "Nulla id ligula ligula.",
      content: (
        <div>
          <p>Aliquam semper tellus vel lacus rutrum mollis. Nunc vitae iaculis lacus, id fringilla leo. Nulla dictum, enim nec bibendum auctor, lorem mi rutrum urna, sed luctus urna nibh sit amet velit. Sed varius sem semper leo ultricies tincidunt. Etiam id ligula ut augue auctor molestie ut quis felis.</p>
          <ol className="list-decimal pl-5 mt-3">
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
    <div className="faq-container">
      <div className="breadcrumb">
        <div className="breadcrumb-text">
          <a href="#" className="breadcrumb-link">Home</a> / <span></span>
        </div>
      </div>
      <h1 className="faq-header">Review</h1>
      <div className="faq-items">
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
