import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { dbService } from '../../util/fbase';

const Faq = () => {
  const navigate = useNavigate();
  const [dbFaqsData, setDbFaqData] = useState([]);

  const getFaqData = async () => {
    const dbData = await getDocs(collection(dbService, 'faqs'));
    dbData.forEach((document) => {
      const newFaqsObject = {
        ...document.data(),
        id: document.id,
      };
      setDbFaqData((prev) => [newFaqsObject, ...prev]);
    });
  };

  useEffect(() => {
    getFaqData();
  }, []);

  return (
    <>
      <button onClick={() => navigate('/faqwrite')}>
        새로운 faq 글 등록하기
      </button>
      <div>
        <h2>FAQ</h2>
      </div>
      <div>
        {dbFaqsData.map((faq) => (
          <div key={faq.id}>
            <h2>{faq.title}</h2>
            <p>{faq.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
