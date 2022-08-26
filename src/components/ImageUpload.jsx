import { useState } from 'react';
import { storageService } from '../util/fbase';
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadString, getDownloadURL } from '@firebase/storage';

const ImageUpload = ({ userObj }) => {
  const [attachment, setAttachment] = useState();

  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const fileReader = new FileReader();

    // 읽기 동작이 끝났을 때마다 발생 (읽기의 성공이나 실패 여부는 상관 않함)
    fileReader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };

    // file read
    fileReader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => setAttachment(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (attachment !== '') {
      // 파일 참조 경로 만들기
      const attachmentReference = ref(
        storageService,
        `${userObj.uid}/${uuidv4()}`
      );
      // storage 참조 경로로 파일 업로드
      const response = await uploadString(
        attachmentReference,
        attachment,
        'data_url'
      );
      // storage에 있는 퍄일 URL download
      const attachmentUrl = await getDownloadURL(response.ref);
      setAttachment('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>ImageUpload</h3>
      <input
        type='file'
        onChange={onFileChange}
        id='image'
        accept='.jpg, .png'
      />
      <p>이미지 파일은 '.jpg', '.png' 확장자만 가능합니다. </p>
      <h5>올리려는 이미지 미리 보기</h5>
      {attachment && (
        <div>
          <img src={attachment} alt='upload image' width='70px' height='70px' />
          <button onClick={onClearAttachment}>이미지 지우기</button>
        </div>
      )}
      <button onSubmit={onSubmit}>이미지 등록하기</button>
    </form>
  );
};

export default ImageUpload;
