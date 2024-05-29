 import React, { useState } from 'react';
import logoImage from '../images/1.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
 

const Navbar = () => {
    let navigate = useNavigate();
    const [isHoveredLogin, setIsHoveredLogin] = useState(false);
    const [isHoveredSignup, setIsHoveredSignup] = useState(false);
    const [isHoveredLogout, setIsHoveredLogout] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    const buttonStyle = (isHovered) => ({
        backgroundColor: isHovered ? 'black' : 'aqua',
        color: isHovered ? 'white' : 'black',
        border: isHovered ? '3px solid aqua' : 'none',
        borderRadius: '25px',
        marginTop: '4px',
        width: '130px',
        height: '44px',
        cursor: 'pointer',
        fontSize: '22px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    });

    let location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{fontFamily:"cursive"}}>
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logoImage} alt="Logo" style={{ width: '80px', height:"80px"}} />
                     
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link style={{fontSize:'25px', fontFamily:"cursive"}} className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{fontSize:'25px', fontFamily:"cursive"}} className={`nav-link ${location.pathname === "/menu" ? "active" : ""}`} to="/menu">Menu</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link style={{fontSize:'25px', fontFamily:"cursive"}} className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{fontSize:'25px', fontFamily:"cursive"}} className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ? (
                        <form className="d-flex">
                            <Link
                                style={buttonStyle(isHoveredLogin)}
                                onMouseEnter={() => setIsHoveredLogin(true)}
                                onMouseLeave={() => setIsHoveredLogin(false)}
                                className="btn btn-primary mx-2"
                                to="/login"
                                role="button"
                            >
                                Login
                            </Link>
                            <Link
                                style={buttonStyle(isHoveredSignup)}
                                onMouseEnter={() => setIsHoveredSignup(true)}
                                onMouseLeave={() => setIsHoveredSignup(false)}
                                className="btn btn-primary mx-2"
                                to="/signup"
                                role="button"
                            >
                                Signup
                            </Link>
                        </form>
                    ) : (
                        <button
                            onClick={handleLogout}
                            style={buttonStyle(isHoveredLogout)}
                            onMouseEnter={() => setIsHoveredLogout(true)}
                            onMouseLeave={() => setIsHoveredLogout(false)}
                            className="btn btn-primary"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
