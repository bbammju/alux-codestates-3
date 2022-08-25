import React from 'react';
import { useNavigate } from 'react-router-dom';

const Faq = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={navigate('/faqwrite')}>새로운 faq 글 등록하기</button>
      <div>
        <h2>FAQ</h2>
      </div>
    </>
  );
};

export default Faq;
