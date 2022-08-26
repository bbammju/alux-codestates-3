import { useState } from 'react';

const ImageUpload = () => {
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

  return (
    <div>
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
    </div>
  );
};

export default ImageUpload;
