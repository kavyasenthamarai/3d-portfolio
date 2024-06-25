import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 2rem;
  text-align: center;
  border: 2px solid #333;
  border-radius: 10px;
  background-color: #1e1e2f; /* Dark blue background */
  color: #fff; /* White text */
`;

const ContactInfo = styled.div`
  margin-bottom: 1rem;
`;

const ContactLink = styled.a`
  color: #ff69b4; /* Pink accent color */
  text-decoration: none;
  margin: 0 1rem;
  transition: color 0.3s ease; /* Smooth transition on color change */
  cursor: pointer;

  &:hover {
    color: #00bfff; /* Light blue accent color on hover */
  }

  &:focus {
    outline: none; /* Remove default outline on focus */
    box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.5); /* Custom focus outline */
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>Contact Me</h2>
      <ContactInfo>
        <p>Email: <a href="mailto:kavyasenthamarai@gmail.com">kavyasenthamarai@gmail.com</a></p>
        <p>Phone: +91 7010839006</p>
      </ContactInfo>
      <div>
        <ContactLink href="https://github.com/kavyasenthamarai?tab=repositories">GitHub</ContactLink>
        <ContactLink href="https://linkedin.com/in/kavya-k-11937126a">LinkedIn</ContactLink>
      </div>
    </ContactContainer>
  );
};

export default Contact;
