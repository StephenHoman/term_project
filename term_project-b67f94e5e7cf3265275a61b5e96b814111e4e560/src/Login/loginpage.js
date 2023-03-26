import React from 'react';
import ColoredLine from './coloredline.js';
import CreateAccount from './createAccount.js';
import styles from './LoginPage.module.css';

function LoginForm() {
  return (
    <form className={styles['login-form']}>
      <label htmlFor="email"></label>
      <input type="text" id="email" placeholder="Email" name="email" />

      <label htmlFor="password"></label>
      <input type="password" id="password" placeholder="Password" name="password" />

      <button type="submit">Log In</button>
      <a href="localhost:3000"> Forgot password?</a> 

      <ColoredLine color="#898F9C" />
      <CreateAccount className={styles['create-account']}/>

    </form>
  );
}

function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default LoginPage;