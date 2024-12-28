import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
  padding: 2rem;
`;

const Calculator = () => {
  const [formData, setFormData] = useState({
    area: '',
    floors: '',
    foundation: '',
    wallMaterial: '',
    roofType: '',
    additionalOptions: ''
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
      const response = await axios.post('/api/calculate', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CalculatorContainer>
      <h2>Калькулятор стоимости строительства</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Площадь (кв. м.):
          <input type="number" name="area" value={formData.area} onChange={handleChange} />
        </label>
        <label>
          Количество этажей:
          <input type="number" name="floors" value={formData.floors} onChange={handleChange} />
        </label>
        <label>
          Тип фундамента:
          <select name="foundation" value={formData.foundation} onChange={handleChange}>
            <option value="ленточный">Ленточный</option>
            <option value="плитный">Плитный</option>
            <option value="столбчатый">Столбчатый</option>
          </select>
        </label>
        <label>
          Материал стен:
          <select name="wallMaterial" value={formData.wallMaterial} onChange={handleChange}>
            <option value="кирпич">Кирпич</option>
            <option value="дерево">Дерево</option>
            <option value="газобетон">Газобетон</option>
          </select>
        </label>
        <label>
          Тип крыши:
          <select name="roofType" value={formData.roofType} onChange={handleChange}>
            <option value="плоская">Плоская</option>
            <option value="скатная">Скатная</option>
          </select>
        </label>
        <label>
          Дополнительные опции:
          <input type="text" name="additionalOptions" value={formData.additionalOptions} onChange={handleChange} />
        </label>
        <button type="submit">Рассчитать стоимость</button>
      </form>
    </CalculatorContainer>
  );
};

export default Calculator;