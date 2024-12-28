import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <h2>О компании</h2>
      <p>Краткое описание компании и услуг.</p>
      <Link to="/calculator">Калькулятор стоимости строительства</Link>
      <h3>Отзывы клиентов</h3>
      <p>Блок с отзывами клиентов.</p>
    </HomeContainer>
  );
};

export default HomePage;