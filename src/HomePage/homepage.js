import React, { useState } from 'react';
import LoginPage from '../Login/loginpage.js';
import Navbars from './navbar.js';
import MainPageContainer from './homepagecontainer.js';
import Heroimage from './heroImage.js';
import Footer from './Footer.js';
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
          <div> <Navbars /> </div>
          <div>  <Heroimage /> </div>
          <div> <MainPageContainer /> </div>
          <h1> hello {user}</h1>
          <div> <Footer /> </div>
           
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
