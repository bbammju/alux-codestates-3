import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { dbService } from '../../util/fbase';
import Faq from './Faq';

const Faqs = ({ userObj }) => {
  const navigate = useNavigate();
  const [dbFaqsData, setDbFaqData] = useState([]);

  useEffect(() => {
    // realtime
    onSnapshot(collection(dbService, 'faqs'), (snapshot) => {
      const newFaqsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDbFaqData(newFaqsData);
    });
  }, []);

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
          <Faq key={faq.id} faq={faq} isOwner={faq.creatorId === userObj.uid} />
        ))}
      </div>
    </>
  );
};

export default Faqs;
