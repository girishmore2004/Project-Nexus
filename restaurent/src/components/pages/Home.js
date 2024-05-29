import React from 'react';
import b3 from '../images/b3.jpg';
import l1 from '../images/l1.jpg';
import d1 from '../images/d1.jpg';
import homeBg from '../images/home-bg.webp';
import servicesBg from '../images/service-bg.avif'; 
import contactBg from '../images/contact-bg.jpg';

const Home = () => {
  return (
    <div> 
      <section id="home" className="d-flex flex-column justify-content-center align-items-center text-center vh-100 text-white position-relative">
        <div className="overlay"></div>
        <h1 className="display-4"style={{color:"aqua"}}>Welcome to Our Restaurant</h1>
        <p className="lead"style={{color:"aqua"}}>Delicious food, friendly service, and great atmosphere. Come and enjoy with us!</p>
        <button className="btn btn-primary btn-lg">Order Now</button>
      </section>
 
      <section id="services-container" className="py-5 position-relative text-white">
        <div className="overlay"></div>
        <div className="container">
          <h2 className="text-center mb-5" style={{color:"aqua"}}>Our Services</h2>
          <div id="services" className="row">
            <div className="col-md-4 mb-4">
              <div className="card  position-relative">
                <img src={b3} className="card-img-top" alt="Service 1" />
                <div className="card-body">
                  <h5 className="card-title">Bulk Ordering</h5>
                  <p className="card-text description">We provide bulk ordering options for events and large gatherings. Enjoy our food in bulk at great prices.</p>
                  <div className="description-bg"></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card position-relative">
                <img src={l1} className="card-img-top" alt="Service 2" />
                <div className="card-body">
                  <h5 className="card-title">Food Catering</h5>
                  <p className="card-text description">Our catering service offers delicious food for any occasion, tailored to your needs.</p>
                  <div className="description-bg"></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card position-relative">
                <img src={d1} className="card-img-top" alt="Service 3" />
                <div className="card-body">
                  <h5 className="card-title">Food Ordering</h5>
                  <p className="card-text description">Order your favorite dishes online and enjoy them at the comfort of your home.</p>
                  <div className="description-bg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <section id="contact" className="py-5 position-relative text-dark">
        <div className="overlay"></div>
        <div className="container" style={{color:"white"}}>
          <h2 className="text-center mb-5"style={{color:"aqua"}}>Contact Us</h2>
          <div id="contact-box" className="mx-auto" style={{ maxWidth: '600px' }}>
            <form>
              <div className="form-group">
                <label htmlFor="name" style={{color:"aqua"}}>Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email"style={{color:"aqua", marginTop:'20px'}}>Email</label>
                <input type="email" className="form-control" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message"style={{color:"aqua",marginTop:'20px'}}>Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </section>
 
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2023 Our Restaurant. All rights reserved.</p>
      </footer>
 
      <style jsx>{`
        #home {
          background-image: url(${homeBg});
          background-size: cover;
          background-position: center;
        }

        #services-container {
          background-image: url(${servicesBg});
          background-size: cover;
          background-position: center;
        }

        #contact {
          background-image: url(${contactBg});
          background-size: cover;
          background-position: center;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgb(0 0 0 / 70%); /* Black overlay with 50% transparency */
          z-index: 1;
        }

        section > * {
          position: relative;
          z-index: 2;
        }

        .card {
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .card-body {
          position: relative;
          z-index: 2;
        }

        .description-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgb(0 0 0 / 70%); /* Dark background with 70% transparency */
          z-index: 1;
          transition: background 0.3s ease;
        }

        // .card-body:hover .description-bg {
        //   background:  white; /* Darker background on hover */
        // }
        .card-title{
          color: black;
        }
        .description {
          min-height: 2.5em;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* number of lines to show */
          -webkit-box-orient: vertical;
          position: relative;
          z-index: 2;
          color: white; /* Adjusted text color */
        }

        #contact-box .form-control {
          background-color: white;
          color: black; /* Adjusted text color */
          border: 1px solid #444;
          box-shadow: 0px 0px 10px aqua;
        }

        #contact-box .form-control:focus {
          background-color: rgba(51, 51, 51, 0.8);
          color: white;
          border: 1px solid #555;
          box-shadow: 0px 0px 10px aqua;
        }


        .btn-primary {
          margin-top: 20px;
          background-color: #ff9800;
          border: none;
        }

        .btn-primary:hover {
          background-color: #e68900;
        } 
      `}</style>
    </div>
  );
};

export default Home;
