import React from 'react';

const Faq = ({ faq }) => {
  return (
    <div key={faq.id}>
      <h2>{faq.title}</h2>
      <p>{faq.content}</p>
    </div>
  );
};

export default Faq;
