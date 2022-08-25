import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo1.png";

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

const HeaderContainer = styled.div`
	margin: 0 auto;
	.navbar {
		height: 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #eee;
		padding: 9px 12px;
		min-width: 680px;
		@media (max-width: 960px) {
			.navlist {
				margin: 15px 20px;
			}
		}
		@media (max-width: 881px) {
			.navlist {
				margin: 15px 15px;
			}
		}
		@media (max-width: 840px) {
			.navlist {
				margin: 15px 10px;
			}
		}
		@media (max-width: 800px) {
			.navlist {
				margin: 15px 5px;
			}
		}
		@media (max-width: 761px) {
			.navlist {
				margin: 15px 0px;
			}
		}
		@media (max-width: 720px) {
			.navbar_menu {
				padding-left: 0px;
			}
		}
	}
	.navbar_logo {
		flex: 1 1 auto;
	}
	.navbar_logo img {
		width: 250px;
		height: 110px;
		object-fit: cover;
	}
	.navbar_menu {
		display: flex;
		list-style: none;
		font-size: 20px;
		margin: 0px;
	}
	.navbar_menu li {
		padding: 9px 12px;
		margin: 15px 30px;
		cursor: pointer;
	}
	.navbar_menu li:hover {
		background-color: white;
		border-radius: 10px;
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
			<nav className="navbar">
				<div className="navbar_logo">
					<Link to="/">
						<img src={Logo} />
					</Link>
				</div>
				<ul className="navbar_menu">
					<li className="navlist">
						<StyledLink to="/detail">
							<div>상세페이지</div>
						</StyledLink>
					</li>
					<li className="navlist">
						<StyledLink to="/">
							<div>FAQ</div>
						</StyledLink>
					</li>
				</ul>
			</nav>
		</HeaderContainer>
	);
};
export default Header;
