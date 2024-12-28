import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  padding: 1rem;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Контактная информация: Телефон, Email, Адрес</p>
    </FooterContainer>
  );
};

export default Footer;