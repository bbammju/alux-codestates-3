import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStore } from '../store/zustand'

const Detail = () => {
  const {cur_product, setting} = useStore()
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

const ProductContainer = styled.div`
  height: 20vh;
  width: 95vw;
  display: flex;
`;

const ProductTIcontainer = styled.div`
  height: 20vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  padding-left: 3vw;
`;
const ProductLogo = styled.img`
  height: 20vh;
  width: 12vw;
  display: flex;
`;

const ProductTitle = styled.div`
  height: 20vh;
  width: 10vw;
  display: flex;
  font-size: 2rem;
`;

const ProductInfo = styled.div`
  height: 20vh;
  width: 10vw;
  display: flex;
`;
