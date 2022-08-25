import React from 'react';

const Faq = ({ faq: { id, title, content }, isOwner }) => {
  return (
    <>
      <div key={id}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      {isOwner && (
        <>
          <button>수정하기</button>
          <button>삭제하기</button>
        </>
      )}
    </>
  );
};

export default Faq;
