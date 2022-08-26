import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { dbService } from '../../util/fbase';
import FaqForm from './FaqForm';

const FaqWrite = () => {
  const navigate = useNavigate();
  const {
    state: { uid },
  } = useLocation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(dbService, 'faqs'), {
      title,
      content,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      creatorId: uid,
    });

    setTitle('');
    setContent('');
    navigate('/faq');
  };

  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;
    name === 'title' ? setTitle(value) : setContent(value);
  };

  return <FaqForm onSubmit={onSubmit} onChange={onChange} />;
};

export default FaqWrite;
