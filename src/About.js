import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <h2>О нас</h2>
      <p>Информация о компании, ее истории и команде.</p>
      <p>Миссия и ценности компании.</p>
      <p>Контактные данные.</p>
    </AboutContainer>
  );
};

export default About;