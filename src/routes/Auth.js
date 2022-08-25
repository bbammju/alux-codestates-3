import React, { useState } from "react";
import { authService } from "../util/fbase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";

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

	const onSocialClick = async e => {
		const {
			target: { name },
		} = e;

		let provider;

		if (name === "google") {
			provider = new GoogleAuthProvider();
		}
		console.log(provider);

		await signInWithPopup(authService, provider);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					name="email"
					type="email"
					value={email}
					placeholder="Email"
					required
					onChange={onChange}
				/>
				<input
					name="password"
					type="password"
					value={password}
					placeholder="Password"
					autoComplete="false"
					required
					onChange={onChange}
				/>
				<input type="submit" value={newAccount ? "Create Account" : "Login"} />
			</form>
			{error}
			<span onClick={toggleAccount}>
				{newAccount ? "계정이 있으신가요?" : "가입하기"}
			</span>
			<div>
				<button name="google" onClick={onSocialClick}>
					Continue with Google
				</button>
			</div>
		</div>
	);
};

export default Auth;
