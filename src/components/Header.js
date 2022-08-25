import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo1.png";
import { authService } from "../util/fbase";

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

const HeaderContainer = styled.div`
	margin: 0 auto;
	.navbar {
		height: 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 9px 12px;
		background-color: #eee;
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

const Header = ({ isLoggedIn }) => {
	const navigate = useNavigate();

	return (
		isLoggedIn && (
			<HeaderContainer>
				<nav className="navbar">
					<div className="navbar_logo">
						<Link to="/">
							<img src={Logo} alt="새로고침" />
						</Link>
					</div>
					<ul className="navbar_menu">
						{/* 관리자모드에서 노출 */}
						<li className="navlist">
							<StyledLink to="/post">
								<div>업로드</div>
							</StyledLink>
						</li>
						<li className="navlist">
							<StyledLink to="/faq">
								<div>FAQ</div>
							</StyledLink>
						</li>
						<li
							className="navlist"
							onClick={() => {
								authService.signOut();
								navigate("/");
							}}
						>
							<div>Logout</div>
						</li>
					</ul>
				</nav>
			</HeaderContainer>
		)
	);
};
export default Header;
