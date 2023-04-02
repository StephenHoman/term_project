import React, { useState } from 'react';
import ColoredLine from './coloredline.js';
import CreateAccount from './createAccount.js';
import styles from './LoginPage.module.css';
import HomePage from '../HomePage/homepage.js';
import data from './users1.json';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 

  const handleEmailChange = (event) => {
    const emailValue = event.target.value.trim();
    console.log('Email value:', emailValue);
    setEmail(emailValue);
  };
  
  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value.trim();
    console.log('Password value:', passwordValue);
    setPassword(passwordValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the email and password match
    const user = data.users.find(users => users.email === email && users.password === password);

    console.log('User:', user); // Debugging statement
 
    if (user) {
      // Call the onLogin function passed as a prop
      props.onLogin(user);
      console.log('Login successful'); // Debugging statement
     
    } else {
      setError('Invalid email or password');
      console.log('Login failed'); // Debugging statement
    }
  };

  console.log('props:', props); // Debugging statement

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <label htmlFor="email"></label>
      <input type="text" id="email" placeholder="Email" name="email" value={email} onChange={handleEmailChange} />

      <label htmlFor="password"></label>
      <input type="password" id="password" placeholder="Password" name="password" value={password} onChange={handlePasswordChange} />

      {error && <div className={styles['error']}>{error}</div>}

      <button type="submit">Log In</button>
      <a href="localhost:3000"> Forgot password?</a>

      <ColoredLine color="#898F9C" />
      <CreateAccount className={styles['create-account']} />

    </form>
  );
}


function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Define the user state variable

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUser(user);
    console.log('User logged in:', user); // Debugging statement
  };

  console.log('isLoggedIn:', isLoggedIn); // Debugging statement
  console.log('user:', user); // Debugging statement

  return (
    <div>
      {isLoggedIn ? (
        <HomePage user={user} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm onLogin={handleLogin} user={null} />
      )}
    </div>
  );
}

export default LoginPage;
