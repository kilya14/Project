import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContactContainer>
      <h2>Контакты</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Сообщение:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <button type="submit">Отправить</button>
      </form>
      <h3>Карта с местоположением офиса</h3>
      <p>Карта</p>
      <p>Контактная информация: Телефон, Email, Адрес</p>
    </ContactContainer>
  );
};

export default Contact;