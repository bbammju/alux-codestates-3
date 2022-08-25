import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ItemContainer = styled.div`
	width: 400px;
	height: 200px;
	margin-left: 25px;
	margin-bottom: 20px;
	margin-top: 60px;
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
    &:hover {
        cursor: pointer;
    }
`;

const ExplanationContainer = styled.div`
	width: 180px;
	height: 160px;
`;

function Item({ data }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/detail')
    }
	return (
		<ItemContainer>
			<ImgContainer src={data.url}></ImgContainer>
			<Container>
				<NameContainer onClick={handleClick}>{data.name}</NameContainer>
				<ExplanationContainer>{data.explanation}</ExplanationContainer>
			</Container>
		</ItemContainer>
	);
}

export default Item;
