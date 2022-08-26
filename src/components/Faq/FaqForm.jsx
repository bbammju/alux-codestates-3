import React from 'react';

const FaqForm = ({ onSubmit, onChange, title, content, isEditing }) => {
  return (
    <div>
      <h2>{isEditing ? '수정할 글을 입력해 주세요:)' : '글 등록 페이지'}</h2>
      <form onSubmit={onSubmit}>
        <input
          value={title}
          name='title'
          onChange={onChange}
          type='text'
          placeholder={isEditing ? title : '등록할 글의 제목을 입력해주세요 :)'}
          maxLength={50}
        />
        <input
          value={content}
          name='content'
          onChange={onChange}
          type='text'
          placeholder='글 내용을 입력해주세요 :)'
        />
        <button>{isEditing ? '수정하기' : '등록하기'}</button>
      </form>
    </div>
  );
};

export default FaqForm;
