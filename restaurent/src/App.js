import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home.js';
import Login from './components/pages/Login.js';
import Signup from './components/pages/Signup.js';
import Alert from './components/pages/Alert.js';
import About from './components/pages/About.js';
import Navbar from './components/pages/Navbar.js';
import Menu from './components/pages/menu.js';
import Contact from './components/pages/Contact.js'
import './App.css';

import { useState } from 'react';
import Forgot from './components/pages/Forgot.js';

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <Router>
     
          <Navbar />
          <Alert alert={alert}/>
          <div className="container-1">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />}>
              </Route>
              <Route path="/menu" element={<Menu showAlert={showAlert} />}>
              </Route>
              <Route exact path="/about" element={<About />}>
              </Route>
              <Route exact path="/contact" element={<Contact />}>
              </Route>
              <Route exact path="/login" element={<Login showAlert={showAlert} />}>
              </Route>
              <Route exact path="/forgot" element={<Forgot showAlert={showAlert} />}>
              </Route> 
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />}>
              </Route>
            </Routes>
          </div>
        </Router>
  );
};

export default App;
