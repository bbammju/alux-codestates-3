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
				<div onClick={toggleAccount}>
					{newAccount ? "계정이 이미 있으신가요?" : "가입하기"}
				</div>
				<div>
					<button name="google" onClick={onSocialLogin}>
						Continue with Google
					</button>
				</div>
			</Div>
		</SignUpForm>
	);
};

export default Auth;
