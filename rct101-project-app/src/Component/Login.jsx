import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const SignInSignUp = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    const isAuthenticated = customAuthService.signIn(email, password);
    if (isAuthenticated) {
      setIsSignedIn(true);
      setRedirectToHome(true);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    customAuthService.signUp(email, password);
    setIsSignedIn(true);
    setRedirectToHome(true);
  };

  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {isSignedIn ? (
        <p>You are signed in!</p>
      ) : (
        <>
          <h1>Sign In / Sign Up</h1>
          <form onSubmit={handleSignIn}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
          </form>
          <form onSubmit={handleSignUp}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
        </>
      )}
    </div>
  );
};


const customAuthService = {
  users: [
    {
      email: 'test@test.com',
      password: 'test123',
    },
  ],
  signIn: (email, password) => {
    const user = customAuthService.users.find((u) => u.email === email);
    if (user && user.password === password) {
      return true;
    }
    return false;
  },
  signUp: (email, password) => {
    customAuthService.users.push({ email, password });
  },
};

export default SignInSignUp;
