import React from 'react';
// import { dbService, deleteDoc, doc } from '../../util/fbase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { dbService } from '../../util/fbase';

const Faq = ({ faq: { id, title, content }, isOwner }) => {
  const onDelete = async () => {
    const check = window.confirm('정말 이 글을 삭제하시겠습니까?');
    if (check) {
      await deleteDoc(doc(dbService, 'faqs', id));
    }
  };

  return (
    <>
      <div key={id}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      {isOwner && (
        <>
          <button>수정하기</button>
          <button onClick={onDelete}>삭제하기</button>
        </>
      )}
    </>
  );
};

export default Faq;
