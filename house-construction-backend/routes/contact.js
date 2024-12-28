const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  const user = new User({
    name,
    email,
    message
  });

  try {
    await user.save();
    res.status(200).json({ message: 'Сообщение отправлено' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
