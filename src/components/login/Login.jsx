import React, { useState } from 'react';
import "./Login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


 const Login = () => {
   const navigate = useNavigate();
  // State variables for form fields and error messages
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Form submission handlers
  const handleRegister = async (e) => {
    e.preventDefault();

    // Input validation (optional)
    if (!username || !email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/auth/register', { username, email, password });
      console.log(response.data); // Handle successful registration (e.g., display success message, redirect)
      setIsLogin(true);
      setError('');
    } catch (error) {
      console.error(error);
      setError('Registration failed. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Input validation (optional)
    if (!username || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
        console.log("login");
      const response = await axios.post('http://localhost:5000/auth/login', { username, password });
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      navigate('/');
      console.log(response.data); // Handle successful login (e.g., store token, redirect to protected routes)
      setError('');
    } catch (error) {
      console.error(error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  // Toggle between login and registration forms
  const handleSlide = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setUsername('');
    setError('');
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isLogin ? 'login' : 'signup'}`}>
          {isLogin ? 'Login Form' : 'Register Here'}
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={isLogin} onChange={handleSlide} />
          <input type="radio" name="slide" id="signup" checked={!isLogin} onChange={handleSlide} />
          <label htmlFor="login" className="slide login">Login</label>
          <label htmlFor="signup" className="slide signup">Register</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          {isLogin ? (
            <form onSubmit={handleLogin} className="login">
              <div className="field">
                <input type="text" placeholder="Email Address" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="field btn">
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                <span>Not a member? <button type="button" onClick={() => setIsLogin(false)}>Register</button></span>
              </div>
              {error && <div className="error">{error}</div>}
            </form>
          ) : (
            <form onSubmit={handleRegister} className="login">
              <div className="field">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
                <div className="field">
                  <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              <div className="field">
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="field btn">
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                <span>Not a member? <button type="button" onClick={() => setIsLogin(false)}>Register</button></span>
              </div>
              {error && <div className="error">{error}</div>}
            </form>
          )}
          </div>
          </div>
</div>)}

export default Login;