import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStore } from '../store/zustand'
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const {cur_product, setting} = useStore()
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/detail/post')
}
  return (
    <>
      <Container>
        <BoardContainer>
          <BoardContentContainer>
            <InfoContainer>
              <TitleContainer>{cur_product.fileLink}</TitleContainer>
              <EditContainer>{cur_product.createdAt} / {cur_product.userName}</EditContainer>
            </InfoContainer>
          </BoardContentContainer>
        </BoardContainer>
        <AddButton onClick={handleClick}>AddButton</AddButton>
        <EditButton>EditButton</EditButton>
      </Container>
    </>
  );
};

export default Detail;

const Container = styled.div`
  height: 80vh;
  width: 95vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

const BoardContainer = styled.div`
  height: 60vh;
  width: 95vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid;
`;

const BoardContentContainer = styled.div`
  height: 50vh;
  width: 90vw;
  display: flex;
  margin: auto;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  height: 10vh;
  width: 80vw;
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const TitleContainer = styled.div`
  height: 10vh;
  width: 30vw;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 2rem;
`;

const EditContainer = styled.div`
  height: 10vh;
  width: 30vw;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 2rem;
`;

const AddButton = styled.button`
  height: 3vh;
  width: 7vw;
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
`

const EditButton = styled.button`
  height: 3vh;
  width: 7vw;
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
`