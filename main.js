const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const inputHandler = require('./inputHandler');
const calculatorRoutes = require('./calculatorRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/calculator', calculatorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

inputHandler.startInput();