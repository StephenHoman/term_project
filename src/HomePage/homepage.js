import React, { useState } from 'react';
import LoginPage from '../Login/loginpage.js';

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
  setIsLoggedIn(true);
  setUser(user);
 
};

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome to My App,{user} !</h1>
          <p>Thank you for logging in.</p>
        </div>
      ) : (
        <div>
          <h1>Please log in to continue</h1>
          <LoginPage onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default HomePage;
