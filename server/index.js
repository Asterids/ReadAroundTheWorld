const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

if (process.env.NODE_ENV !== 'production') require('../secrets')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server error.');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
