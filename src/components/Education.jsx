import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #fef0eb;
  margin: 1rem 0;
`;

const EducationLink = styled.a`
  text-decoration: none;
  color: inherit; /* Inherit text color from parent */
`;

const EducationBox = styled.div`
  background-color: #1e1e2f;
  margin-top: 1rem;
  border: 2px solid #ff69b4;
  padding: 1rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: transform 0.3s;
  border-radius: 10px; /* Rounded corners */

  &:hover {
    transform: scale(1.05);
  }
`;

const EducationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #1e1e2f;
  margin-top: 1rem;
  border-radius: 10px; /* Rounded corners */
`;

const EducationText = styled.p`
  margin: 0;
`;

const Education = () => {
  return (
    <EducationContainer id="education">
      <h2>Education</h2>
      <EducationLink href="http://www.sjctindivanam.org/" target="_blank" rel="noopener noreferrer">
        <EducationBox>
          <h3>School</h3>
          <EducationItem>
            <EducationText>ST.JOSEPH OF CLUNY MATRIC.HR.SEC.SCHOOL</EducationText>
            <img src={`${process.env.PUBLIC_URL}/images/school.jpeg`} alt="School" style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
          </EducationItem>
        </EducationBox>
      </EducationLink>
      <EducationLink href="https://www.saveetha.ac.in/" target="_blank" rel="noopener noreferrer">
        <EducationBox>
          <h3>College</h3>
          <EducationItem>
            <EducationText>Saveetha Engineering College, Chennai</EducationText>
            <img src={`${process.env.PUBLIC_URL}/images/college.jpeg`} alt="College" style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
          </EducationItem>
        </EducationBox>
      </EducationLink>
    </EducationContainer>
  );
};

export default Education;
