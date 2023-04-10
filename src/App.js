import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Login/loginpage.js';
import HomePage from './HomePage/homepage.js';
import Computers from './pages/Computers.js';
import Supplies from './pages/Supplies.js';
import Books from './pages/Books.js';
import Apparel from './pages/Apparel.js';
import Cart from './pages/Cart.js';
import Navbars from './HomePage/navbar.js';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already authenticated
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedAuth));
    }
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUser(user);
    localStorage.setItem('auth', JSON.stringify(user));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('auth');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={isLoggedIn ? <HomePage user={user} onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="/computers" element={<Computers />} />
        <Route path="/supplies" element={<Supplies />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/books" element={<Books />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {isLoggedIn ? <Navbars isLoggedIn={isLoggedIn} onLogout={handleLogout} /> : null}
    </BrowserRouter>
  );
}

export default App;
