import React, { useState } from 'react';
import { authService } from '../util/fbase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newAccount) {
        const result = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        const result = await signInWithEmailAndPassword(
          authService,
          email,
          password
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='email'
          type='email'
          value={email}
          placeholder='Email'
          required
          onChange={onChange}
        />
        <input
          name='password'
          type='password'
          value={password}
          placeholder='Password'
          autoComplete='false'
          required
          onChange={onChange}
        />
        <input type='submit' value={newAccount ? 'Create Account' : 'Login'} />
      </form>
      <div>
        <button>Continue with Google</button>
      </div>
    </div>
  );
};

export default Auth;
