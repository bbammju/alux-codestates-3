import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { dbService } from '../../util/fbase';
import Faq from './Faq';

const Faqs = ({ userObj }) => {
  const navigate = useNavigate();
  const [dbFaqsData, setDbFaqData] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

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
  }, [isUpdating]);

  const isUpdated = () => setIsUpdating((prev) => !prev);

  return (
    <>
      <button
        onClick={() => navigate('/faqwrite', { state: { uid: userObj.uid } })}
      >
        새로운 faq 글 등록하기
      </button>
      <div>
        <h2>FAQ</h2>
      </div>
      <div>
        {dbFaqsData.map((faq) => (
          <Faq
            key={faq.id}
            faq={faq}
            isOwner={faq.creatorId === userObj.uid}
            isUpdated={isUpdated}
          />
        ))}
      </div>
    </>
  );
};

export default Faqs;
