import React, { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const onSubmit = (e) => {
    e.preventDefault();
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
        <input type='submit' value='Log In' />
      </form>
      <div>
        <button>Continue with Google</button>
      </div>
    </div>
  );
};

export default Auth;
