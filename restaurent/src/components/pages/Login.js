import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);  
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/userRoutes/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });

      const json = await response.json();

      if (response.ok) {
        localStorage.setItem('token', json.token);
        navigate("/");
        props.showAlert("Logged in Successfully", "success");
      } else {
        setError(json.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      setError('Login failed');
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
 
  const containerStyle = {
    backgroundColor: 'black',
    borderRadius: '15px',
    boxShadow: '0 0 20px aqua',
    padding: '20px',
    width: '500px',
    color: 'white',
    marginTop: '3rem',
  };
 
  const buttonStyle = {
    backgroundColor: isHovered ? 'black' : 'aqua',
    color: isHovered ? 'white' : 'black',
    border: isHovered ? '3px solid aqua' : 'none',
    borderRadius: '25px',
    marginTop: '7px',
    marginBottom:'15px',
    width: '130px',
    height: '44px',
    cursor: 'pointer',
    fontSize: '22px',
    marginLeft:'167px' 
  };

  return (
    <div className="container mt-3" style={containerStyle}>
      <h2 className="my-2" style={{ color: "aqua",textAlign:"center"}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{textAlign:"start"}}>Email address</label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            required
            style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', marginTop: '4px', padding: '10px' }}
          />
          <div id="emailHelp" className="form-text" style={{ color: 'white' }}>We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            id="password"
            name="password"
            required
            style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'black', marginTop: '4px', padding: '10px' }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Submit
        </button>
        {error && <p className="text-danger" style={{ color: 'red' }}>{error}</p>}
      </form>
      <Link to="/forgot" style={{color: 'aqua' }}>Forgot Password?</Link>
      <p style={{marginTop:"10px"}}>Not a member? <a href="/Signup" style={{color: 'aqua' }}>Sign Up</a></p>
    </div>
  );
}

export default Login;
