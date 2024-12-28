const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const calculateRoutes = require('./routes/calculate');
const contactRoutes = require('./routes/contact');
const servicesRoutes = require('./routes/services');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/house-construction', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/calculate', calculateRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/services', servicesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
