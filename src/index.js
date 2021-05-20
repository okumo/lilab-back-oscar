
const express = require('express');
const cors = require('cors')
const httpStatus= require('http-status')
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.static(__dirname + '/images'));
app.use(express.json());
app.use(cors())
app.options('*', cors())
// Routes
app.use(require('./routes/products'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});