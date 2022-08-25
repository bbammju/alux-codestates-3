import styled from "styled-components";

const ItemContainer = styled.div`
	padding: 20px;
	/* max-width: 170px; */
	/* box-shadow: 0 3px 7px 0 rgba(8, 29, 53, 0.21); */
	margin-right: 20px;
	margin-bottom: 20px;
	border: 1px solid black;
	overflow: hidden;

	.item-title {
		margin-top: 20px;
		font-size: 20px;
	}
	.item-img {
		width: 150px;
		height: 100px;
		float: left;
	}
`;

const Item = props => {
	const { imageSrc, name } = props;
	return (
		<ItemContainer>
			<img className="item-img" src={imageSrc} alt={name} />
			<div className="item-title">
				<b>{name}</b>
			</div>
			<div id="item-description"></div>
		</ItemContainer>
	);
};
export default Item;
