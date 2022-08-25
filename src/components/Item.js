import styled from "styled-components";

const ItemContainer = styled.div`
    width: 400px;
    height: 200px;
    margin-left: 25px;
    margin-bottom: 20px;
    display: flex;
`;

const ImgContainer = styled.img`
    width: 200px;
    height: 200px;
`;

const Container = styled.div`
    width: 180px;
    height: 200px;
    margin-left: 20px;
`;

const NameContainer = styled.div`
    width: 180px;
    height: 40px;
    font-size: 24px;
    font-weight: bold;
`;

const ExplanationContainer = styled.div`
    width: 180px;
    height: 160px;
`;

function Item ({data}) {
    return (
        <ItemContainer>
            <ImgContainer src={data.url}></ImgContainer>
            <Container>
                <NameContainer>{data.name}</NameContainer>
                <ExplanationContainer>{data.explanation}</ExplanationContainer>
            </Container>
        </ItemContainer>
    )
}

export default Item;