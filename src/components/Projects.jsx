import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #fef0eb;
  color: #fff;
  margin: 1rem 0;
`;

const ProjectCard = styled.div`
  background-color: #1e1e2f; /* Dark blue background */
  border: 2px solid #ff69b4; /* Pink border */
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem 0;
  transition: transform 0.3s;
  cursor: pointer;
  color: #fff;

  &:hover {
    transform: scale(1.05);
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      <ProjectCard onClick={() => window.open('https://github.com/kavyasenthamarai/JorneAI', '_blank')}>
        <h3>JorneAI</h3>
        <p>Developed an AI-powered chatbot using TensorFlow and NLTK in Python. Implemented natural language processing algorithms to comprehend user queries and generate context-aware responses. Enabled personalized travel recommendations and insights, fostering seamless interactions between users and the chatbot.</p>
      </ProjectCard>
      <ProjectCard onClick={() => window.open('https://github.com/kavyasenthamarai/UrbanSoundVisualization', '_blank')}>
        <h3>Urban Sound Visualization</h3>
        <p>Developed a pioneering visual companion utilizing TensorFlow, designed to support individuals with hearing impairments in urban settings. Engineered the system to convert urban sounds into visual cues, enabling intuitive navigation and enhanced safety. Spearheaded a project that empowers individuals with hearing impairments to navigate urban environments confidently and independently through intuitive visual aids.</p>
      </ProjectCard>
      <ProjectCard onClick={() => window.open('https://github.com/kavyasenthamarai/ChatbotCompetition', '_blank')}>
        <h3>Achivements</h3>
        <p>3rd Place in Inter-Collegiate Chatbot Competition</p>
        <p>Award for Environmental Protection at Hack with Folks, Coders Club...</p>
      </ProjectCard>
    </ProjectsContainer>
  );
};

export default Projects;
