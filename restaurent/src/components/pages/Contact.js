
import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  const containerStyle = {
    backgroundColor: 'black',
    borderRadius: '15px',
    boxShadow: '0 0 20px aqua',
    padding: '20px',
    width: '500px',
    color: 'white',
    marginTop: '7rem',
  };

  return (
    <div className="container" style={containerStyle}>
      <h2 className="my-2" style={{ color: 'aqua', textAlign: 'center' }}>Contact Us</h2>
      <ContactInfo>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Address:</strong> 1234 Main St, City, Country</p>
      </ContactInfo>
    </div>
  );
};

const ContactInfo = styled.div`
  p {
    margin-bottom: 10px;
    font-size: 18px;
  }

  strong {
    color: aqua;
  }
`;

export default Contact;
