import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  padding: 2rem;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <h2>Услуги</h2>
      <p>Перечень услуг, предоставляемых компанией.</p>
      <p>Подробное описание каждой услуги.</p>
      <h3>Фотогалерея выполненных работ</h3>
      <p>Фотогалерея</p>
    </ServicesContainer>
  );
};

export default Services;