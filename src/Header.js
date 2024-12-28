import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png'; // Импортируйте логотип

const HeaderContainer = styled.header`
  background-color: #333;
  padding: 1rem;
  color: white;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 1rem;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Логотип компании" /> {/* Используйте логотип */}
      <h1>Строительство домов</h1>
      <Nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/calculator">Калькулятор</Link></li>
          <li><Link to="/services">Услуги</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
