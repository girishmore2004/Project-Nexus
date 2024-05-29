
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false); // State to manage hover

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.cpassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/userRoutes/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
      });

      const json = await response.json();

      if (response.ok) {
        localStorage.setItem('token', json.token);
        navigate("/");
        props.showAlert("Account Created Successfully", "success");
      } else {
        setError(json.message || 'Signup failed');
      }
    } catch (err) {
      console.error(err);
      setError('Signup failed');
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
      <h2 className="my-2" style={{ color: "aqua", textAlign: "center" }}>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{ textAlign: "start" }}>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            aria-describedby="emailHelp"
            required
            style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'black', marginTop: '4px', padding: '10px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ textAlign: "start" }}>Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
            required
            style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'black', marginTop: '4px', padding: '10px' }}
          />
          <div id="emailHelp" className="form-text" style={{ color: 'white' }}>We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" style={{ textAlign: "start" }}>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            minLength={6}
            required
            style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'black', marginTop: '4px', padding: '10px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label" style={{ textAlign: "start" }}>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
            minLength={6}
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
    </div>
  );
}

export default Signup;
