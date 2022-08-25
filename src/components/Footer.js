import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo1.png";

const FooterContainer = styled.footer`
	display: flex;
	height: 150px;
	background-color: #eee;
	color: black;
	margin-top: 50px;
	min-width: 660px;
	position: absolute;
	bottom: 0;
	width: 100%;

	.footer_info {
		list-style-type: none;
		flex: 1 1 auto;
		margin-left: 100px;
		text-decoration: none;

		@media (max-width: 1200px) {
			list-style-type: none;
			flex: 1 1 auto;
			text-decoration: none;
			margin-left: 50px;
		}

		@media (max-width: 1044px) {
			list-style-type: none;
			flex: 1 1 auto;
			text-decoration: none;
			margin-left: 0px;
		}

		@media (max-width: 701px) {
			list-style-type: none;
			flex: 1 1 auto;
			text-decoration: none;
			margin-left: 0px;
			padding-left: 0px;
		}
	}

	.footer_info > li div {
		width: 200px;
		height: 100px;
		font-size: 40px;
		color: black;
	}
	.footer_logo img {
		width: 250px;
		height: 100px;
		object-fit: cover;
	}

	.footer_github {
		flex: 1 1 auto;
		margin-left: 400px;
		margin-top: 20px;

		@media only screen and (max-width: 1002px) {
			margin-left: 100px;
		}

		@media only screen and (max-width: 894px) {
			margin-left: 50px;
		}

		@media only screen and (max-width: 843px) {
			margin-left: 0px;
		}
	}

	.footer_github > ul {
		list-style-type: none;
		font-size: 25px;
	}

	.footer_github_members {
		display: flex;
	}

	.footer_github_members > div {
		padding: 3px 5px;
		margin: 5px 10px;
	}

	.github_icons {
		font-size: 50px;
		color: black;
	}
	.currentColor {
		font-size: 25px;
	}

	.footer_github_members_name {
		height: 50px;
		line-height: 50px;
	}

	.footer_github_members_name > a {
		text-decoration: none;
		color: black;
	}
`;

const Footer = () => {
	return (
		<FooterContainer>
			<ul className="footer_info">
				<li className="footer_logo">
					<Link to="/">
						<img src={Logo} alt="새로고침" />
					</Link>
				</li>
				<li>Copyright @ 2022 All right Reserved</li>
			</ul>
			<div className="footer_github">
				<ul>
					<li className="footer_github_members">
						<div>
							<a
								href="https://github.com/bbammju/alux-codestates-3"
								target="_blank"
								rel="noopener noreferrer"
							>
								<BsGithub className="github_icons" />
							</a>
						</div>
						<div className="footer_github_members_name">
							<a
								href="https://github.com/bbammju"
								target="_blank"
								rel="noopener noreferrer"
							>
								김범주
							</a>
						</div>
						<div className="footer_github_members_name">
							<a
								href="https://github.com/jiye-7"
								target="_blank"
								rel="noopener noreferrer"
							>
								유지예
							</a>
						</div>
						<div className="footer_github_members_name">
							<a
								href="https://github.com/dlawjdghks11"
								target="_blank"
								rel="noopener noreferrer"
							>
								임정환
							</a>
						</div>
						<div className="footer_github_members_name">
							<a
								href="https://github.com/hyukzz"
								target="_blank"
								rel="noopener noreferrer"
							>
								정윤혁
							</a>
						</div>
					</li>
				</ul>
			</div>
		</FooterContainer>
	);
};

export default Footer;
