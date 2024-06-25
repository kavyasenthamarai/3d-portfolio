import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  background-color: #1e1e2f;  /* Dark blue background */
  padding: 2rem;
  text-align: center;
  border: 2px solid #ff69b4;  /* Pink border */
  margin: 2rem;
  border-radius: 10px;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <h2>About Me</h2>
      <p>I am passionate about AI and future technologies, with hands-on experience in startups. I worked as an AI Engineer Intern, dealing with real-time challenges, and also as a Content Developer for a company focused on AR/VR tech, which helped me learn continuously. As the Joint Secretary for the Intelligent Systems Community in my college's tech society, I contribute to a vibrant tech culture. My diverse experiences and commitment to growth make me adaptable to various tech fields.</p>
    </AboutContainer>
  );
};

export default About;
