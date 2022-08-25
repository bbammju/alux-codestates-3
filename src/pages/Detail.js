import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import samplelogo from '../assets/samplelogo.jpg';
// import { db } from '../firebase';

const Detail = () => {
  // const getDoc = async (colId, docId) => {
  // 	try {
  // 		const doc = await db.collection(colId).doc(docId).get();
  // 		if (doc.exists) {
  // 			console.log(doc.data());
  // 		} else {
  // 			console.log("해당 document 없음!");
  // 		}
  // 		console.log("get : good!");
  // 	} catch (e) {
  // 		alert("get : err!");
  // 	}
  // };
  // useEffect(() => {
  // 	getDoc();
  // });
  return (
    <>
      <Header />
      <Container>
        <ProductContainer>
          <ProductLogo src={samplelogo} />
          <ProductTIcontainer>
            <ProductTitle>df</ProductTitle>
            <ProductInfo>sdf</ProductInfo>
          </ProductTIcontainer>
        </ProductContainer>

        <BoardContainer>
          <BoardContentContainer>
            <InfoContainer>
              <TitleContainer>markcoding-link-1.0.1 Setup.exe</TitleContainer>
              <EditContainer>4월 27일 정임도</EditContainer>
            </InfoContainer>
            <InfoContainer>
              <TitleContainer>markcoding-link-1.0.1 Setup.exe</TitleContainer>
              <EditContainer>4월 27일 정임도</EditContainer>
            </InfoContainer>
            <InfoContainer>
              <TitleContainer>markcoding-link-1.0.1 Setup.exe</TitleContainer>
              <EditContainer>4월 27일 정임도</EditContainer>
            </InfoContainer>
            <InfoContainer>
              <TitleContainer>markcoding-link-1.0.1 Setup.exe</TitleContainer>
              <EditContainer>4월 27일 정임도</EditContainer>
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
