import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
 background-color: #fef0eb;
  padding: 2rem;
  text-align: center;
`;

const ExperienceItem = styled.div`
  background-color: #1e1e2f; /* Dark blue background */
  border: 2px solid #ff69b4; /* Pink border */
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ExperienceTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #fff; /* White text color */
`;

const ExperienceDescription = styled.p`
  margin-bottom: 0.5rem;
  color: #ccc; /* Light gray text color */
`;

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <h2>Experience</h2>
      <ExperienceItem>
        <ExperienceTitle>AI Engineer Intern</ExperienceTitle>
        <ExperienceDescription>Moozz Innovatie Solutions LLP</ExperienceDescription>
        <ExperienceDescription>09/2023 – 01/2024</ExperienceDescription>
        <ExperienceDescription>Integral part of developing an AI-powered chatbot for the company's travel app. Active participation in meetings and close collaboration with developers. Contributed to creating a scalable and intelligent solution, adapting to varying project tasks.</ExperienceDescription>
      </ExperienceItem>
      <ExperienceItem>
        <ExperienceTitle>Tech Content Developer</ExperienceTitle>
        <ExperienceDescription>Intrino Robotics & Technologies Pvt Ltd (Part-time)</ExperienceDescription>
        <ExperienceDescription>June 2024 - Present</ExperienceDescription>
        <ExperienceDescription>Develops engaging content centered around AR/VR technologies and robotics. Creates technical content suited for various social media platforms. Stays abreast of advancements in AR/VR and robotics for producing timely and informative content.</ExperienceDescription>
      </ExperienceItem>
      <ExperienceItem>
        <ExperienceTitle>Joint Secretary of Intelligent Systems Community</ExperienceTitle>
        <ExperienceDescription>Tech Society, Chennai</ExperienceDescription>
        <ExperienceDescription>07/2023 - 04/2024</ExperienceDescription>
        <ExperienceDescription>Explored future technologies such as AI and robotics with fellow students. Managed a 250+ member tech community by organizing events and interactive activities. Conducted workshops and events as a resource person, successfully leading meetings and handling large gatherings. Explored methods to engage with community members and support them in hands-on technical skill development.</ExperienceDescription>
      </ExperienceItem>
    </ExperienceContainer>
  );
};

export default Experience;
