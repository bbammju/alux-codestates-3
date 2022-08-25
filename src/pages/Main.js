import Header from "../components/Header";
import ChannelTalk from "../components/ChannelTalk";
import Item from "../components/Item";
import getItems from "../data/data";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Div = styled.div`
	margin: auto;
	width: 500px;
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	flex-wrap: flex-wrap;
	background-color: #ffffff;
	div {
		width: 220px;
	}
`;

function Main() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const updateItems = async () => {
			const fetchedData = await getItems();
			setItems(fetchedData);
		};
		updateItems();
	});

	return (
		<div>
			<Header />
			<Div>
				{/* <Item {...items[1]} />
				<Item {...items[2]} />
				<Item {...items[3]} />
				<Item {...items[5]} /> */}
			</Div>

			<ChannelTalk />
		</div>
	);
}
export default Main;
