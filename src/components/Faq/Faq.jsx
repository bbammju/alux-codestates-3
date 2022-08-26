import React, { useState } from 'react';
import { doc, deleteDoc, setDoc } from 'firebase/firestore';
import { dbService } from '../../util/fbase';
import FaqForm from './FaqForm';

const Faq = ({ faq: { id, title, content }, isOwner, isUpdated }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const onDelete = async () => {
    const check = window.confirm('정말 이 글을 삭제하시겠습니까?');
    if (check) {
      await deleteDoc(doc(dbService, 'faqs', id));
      isUpdated();
    }
  };

  const onUpdate = async (e) => {
    e.preventDefault();
    await setDoc(
      doc(dbService, 'faqs', id),
      {
        title: newTitle,
        content: newContent,
      },
      { merge: true }
    );
    isUpdated();
    setIsEditing(false);
  };

  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;
    name === 'title' ? setNewTitle(value) : setNewContent(value);
  };

  const toggleEditing = () => setIsEditing((prev) => !prev);

  return (
    <>
      {isEditing ? (
        <>
          <FaqForm
            onSubmit={onUpdate}
            onChange={onChange}
            title={newTitle}
            content={newContent}
            isEditing={isEditing}
            toggleEditing={toggleEditing}
          />
        </>
      ) : (
        <>
          <div key={id}>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
          {isOwner && (
            <>
              <button onClick={toggleEditing}>수정하기</button>
              <button onClick={onDelete}>삭제하기</button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Faq;
