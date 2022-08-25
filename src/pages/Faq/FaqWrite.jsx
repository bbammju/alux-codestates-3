import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { dbService } from '../../util/fbase';

const FaqWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(dbService, 'faqs'), {
      title,
      content,
      createdAt: Date.now(),
      updatedAt: Date.now(),
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

  return (
    <div>
      <h2>글 등록 페이지</h2>
      <form onSubmit={onSubmit}>
        <input
          value={title}
          name='title'
          onChange={onChange}
          type='text'
          placeholder='등록할 글의 제목을 입력해주세요 :)'
          maxLength={50}
        />
        <input
          value={content}
          name='content'
          onChange={onChange}
          type='text'
          placeholder='글 내용을 입력해주세요 :)'
        />
        <button>등록하기</button>
      </form>
    </div>
  );
};

export default FaqWrite;
