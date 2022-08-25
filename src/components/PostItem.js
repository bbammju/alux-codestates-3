import styled from 'styled-components';
import Logo from '../assets/PostLogo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
  overflow-y: auto;
`;

const BackgroundContainer = styled.form`
  width: 600px;
  height: 700px;
  margin-top: 50px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
`;

const LogoContainer = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  margin-top: -30px;
  margin-bottom: -70px;
`;

const LogoImg = styled.img`
  max-width: 600px;
  max-height: 300px;
  margin-left: auto;
  margin-right: auto;
`;

const TextContainer = styled.div`
  width: 600px;
  height: 30px;
  font-weight: bold;
  margin-top: 15px;
`;

const ThumbnailImg = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid black;
`;

const UploadFileBtn = styled.input``;

const TextBox = styled.textarea`
  width: 300px;
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  padding-left: 10px;
  resize: none;
  align-items: center;
`;

const TextBox2 = styled.textarea`
  width: 600px;
  height: 100px;
  font-size: 18px;
  resize: none;
`;

const ButtonContainer = styled.div`
  width: 600px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

const PostBtn = styled.button`
  height: 32px;
  width: 122px;
  font-size: 14px;
  cursor: pointer;
  background-color: #00bfff;
  color: rgb(252, 251, 251);
  line-height: 1px;
  border: 1px solid #00bfff;
  border-radius: 5px;
  border-style: none;
  margin-right: 10px;
  &:hover {
    background-color: #fffcfb;
    color: #00bfff;
    border: 1px solid #00bfff;
  }
`;

const CancelBtn = styled.button`
  height: 32px;
  width: 122px;
  font-size: 14px;
  cursor: pointer;
  background-color: rgb(252, 251, 251);
  color: #00bfff;
  line-height: 1px;
  border: 1px solid #00bfff;
  border-radius: 5px;
  margin-left: 10px;
`;

function PostItem() {
  const navigate = useNavigate();
  const [postInfo, setPostInfo] = useState({
    name: '',
    image: [],
    explanation: '',
  });

  const inputHandler = (e) => {
    let value = e.target.value;
    setPostInfo({ ...postInfo, [e.target.name]: value });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    const file = e.target.files[0];
    setPostInfo({ ...postInfo, image: file });
  };

  const handlePostRequest = () => {
    const formData = new FormData();
    for (const key in postInfo) {
      if (Array.isArray(postInfo[key])) {
        formData.append(key, JSON.stringify(postInfo[key]));
      } else {
        formData.append(key, postInfo[key]);
      }
    }
    console.log(formData);
    // const response = await axios.post(`${process.env.REACT_APP_API_URL}/posts`, formData,
    //   {headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true});

    // if (response.data.message === 'ok') {
    //     navigate('/');
    // }
  };

  const handleCancelBtn = () => {
    navigate('/');
  };

  return (
    <>
      <ModalBackdrop>
        <BackgroundContainer>
          <LogoContainer>
            <LogoImg src={Logo} />
          </LogoContainer>
          <TextContainer>상품 이름</TextContainer>
          <TextBox name='name' onChange={inputHandler}></TextBox>
          <TextContainer>상품 이미지</TextContainer>
          <ThumbnailImg />
          <UploadFileBtn
            name='image'
            type='file'
            accept='image/*'
            onChange={handleUpload}
          ></UploadFileBtn>
          <TextContainer>상품 설명</TextContainer>
          <TextBox2 name='explanation' onChange={inputHandler}></TextBox2>
          <ButtonContainer>
            <PostBtn onClick={handlePostRequest}>등록</PostBtn>
            <CancelBtn onClick={handleCancelBtn}>취소</CancelBtn>
          </ButtonContainer>
        </BackgroundContainer>
      </ModalBackdrop>
    </>
  );
}

export default PostItem;
