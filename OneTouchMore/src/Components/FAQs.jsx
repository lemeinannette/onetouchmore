import React from 'react';

const FAQs = () => {
  const FAQs = [
    {
      question: 'What types of devices do you repair?',
      answer: 'We repair a wide range of mobile devices, including iPhones, iPads, Android phones, and tablets.',
    },
    {
      question: 'How long does it take to repair my device?',
      answer: 'Our repair times vary depending on the complexity of the repair. We aim to complete most repairs within 30 minutes, but some repairs may take longer.',
    },
    {
      question: 'What is your warranty policy?',
      answer: 'We offer a 90-day warranty on all repairs. If you experience any issues with your repair within this timeframe, we will be happy to assist you.',
    },
    {
      question: 'How much do your repairs cost?',
      answer: 'Our prices are competitive and vary depending on the type of repair needed. We offer free quotes for all repairs.',
    },
    {
      question: 'Do you offer same-day repairs?',
      answer: 'Yes, we offer same-day repairs for most repairs. Please call us to confirm availability.',
    },
  ];

  return (
    <section className="faqs">
      <h2>FAQs</h2>
      <ul>
        {FAQs.map((FAQs, index) => (
          <li key={index}>
            <h3>{FAQs.question}</h3>
            <p>{FAQs.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQs;