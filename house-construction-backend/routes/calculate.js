const express = require('express');
const router = express.Router();
const Calculation = require('../models/Calculation');

router.post('/', async (req, res) => {
  const { area, floors, foundation, wallMaterial, roofType, additionalOptions } = req.body;

  // Пример расчета стоимости
  const totalCost = area * floors * 1000; // Упрощенный пример
  const breakdown = {
    foundation: area * 500,
    walls: area * floors * 300,
    roof: area * 200,
    additionalOptions: additionalOptions ? 1000 : 0
  };

  const calculation = new Calculation({
    area,
    floors,
    foundation,
    wallMaterial,
    roofType,
    additionalOptions,
    totalCost,
    breakdown
  });

  try {
    await calculation.save();
    res.status(200).json(calculation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
