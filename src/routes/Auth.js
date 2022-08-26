import React, { useState } from "react";
import { authService } from "../util/fbase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import styled from "styled-components";
import PostLogo from "../assets/PostLogo.png";

const SignUpForm = styled.div`
	margin: 0 auto;
	padding-top: 50px;
	width: 550px;
	height: 500px;
	font-weight: 700;
	text-align: left;
	border-radius: 5px;
	background-color: white;
`;

const Div = styled.div`
	margin: 0 auto;
	padding-top: 20px;
	width: 440px;
	height: 70%;
`;

const InputForm = styled.div`
	margin: 0 auto;
	margin: 5px;
`;
const InputBox = styled.div`
	width: 430px;
	height: 40px;
	border: solid 1px gainsboro;
	border-radius: 5px;
	margin-bottom: 20px;
`;
const CreateBox = styled.div`
	margin: 0 auto;
	height: 40px;
	border-radius: 5px;
	margin-bottom: 20px;
`;
const Create = styled.input`
	width: 430px;
	border-style: none;
	height: 35px;
	margin-left: 5px;
	font-size: 13px;
	cursor: pointer;
`;

const Input = styled.input`
	width: 410px;
	border-style: none;
	height: 35px;
	margin-left: 5px;
	font-size: 13px;
	:focus {
		outline: none;
	}
`;
const Pointer = styled.div`
	cursor: pointer;
`;
const Google = styled.div`
	text-align: center;
	margin-top: 20px;
	.loginBtn {
		box-sizing: border-box;
		position: relative;
		margin: 0.2em;
		padding: 0 15px 0 46px;
		border: none;
		text-align: left;
		line-height: 34px;
		white-space: nowrap;
		border-radius: 0.2em;
		font-size: 16px;
		color: #fff;
	}
	.loginBtn:before {
		content: "";
		box-sizing: border-box;
		position: absolute;
		top: 0;
		left: 0;
		width: 34px;
		height: 100%;
	}
	.loginBtn:focus {
		outline: none;
	}
	.loginBtn:active {
		box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
	}

	/* Google */
	.loginBtn--google {
		background: #dd4b39;
	}
	.loginBtn--google:before {
		border-right: #bb3f30 1px solid;
		background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png")
			6px 6px no-repeat;
	}
	.loginBtn--google:hover,
	.loginBtn--google:focus {
		background: #e74b37;
		cursor: pointer;
	}
`;
const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [newAccount, setNewAccount] = useState(true);
	const [error, setError] = useState("");

	const onChange = e => {
		const {
			target: { name, value },
		} = e;
		if (name === "email") {
			setEmail(value);
		} else if (name === "password") {
			setPassword(value);
		}
	};

	const onSubmit = async e => {
		e.preventDefault();
		try {
			if (newAccount) {
				await createUserWithEmailAndPassword(authService, email, password);
			} else {
				await signInWithEmailAndPassword(authService, email, password);
			}
		} catch (error) {
			setError(error.message);
		}
	};

	const toggleAccount = () => setNewAccount(prev => !prev);

	const onSocialLogin = async e => {
		const {
			target: { name },
		} = e;
		let provider;
		if (name === "google") {
			provider = new GoogleAuthProvider();
		}
		await signInWithPopup(authService, provider);
	};

	return (
		<SignUpForm>
			<Div>
				<img
					src={PostLogo}
					style={{ width: 420, height: 300, objectFit: "cover" }}
					alt="새로고침"
				></img>

				<form onSubmit={onSubmit}>
					<InputForm>
						<InputBox>
							<Input
								name="email"
								type="email"
								value={email}
								placeholder="Email"
								required
								onChange={onChange}
							/>
						</InputBox>
						<InputBox>
							<Input
								name="password"
								type="password"
								value={password}
								placeholder="Password"
								autoComplete="false"
								required
								onChange={onChange}
							/>
						</InputBox>
					</InputForm>
					<CreateBox>
						<Create
							type="submit"
							value={newAccount ? "Create Account" : "Login"}
						/>
					</CreateBox>
				</form>
				{error}
				<Pointer onClick={toggleAccount}>
					{newAccount ? "계정이 이미 있으신가요?" : "가입하기"}
				</Pointer>
				<Google>
					<button
						className="loginBtn loginBtn--google"
						name="google"
						onClick={onSocialLogin}
					>
						Continue with Google
					</button>
				</Google>
			</Div>
		</SignUpForm>
	);
};

export default Auth;
