const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Get stuff
const routes = require('./routes');

const Expense = require('./models/expense');

// Define vars
const endpoint = 'mongodb://osman.cea:kittenzbetrippin@ds040027.mlab.com:40027/expense_app';
const root = './';
const port = process.env.Port || 3000;
const app = express();


// Connect to DB using MongoClient
mongoose.connect(endpoint, { useMongoClient: true });



/*******************************/
/***** Register middleware *****/
/*******************************/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join( root, 'dist' )));


// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');

  next();
});



// Register routes
app.use('/api', routes);



// For any other route not in the API, serve index.html
// app.get('*', (req, res) => {
//   res.sendFile('dist/index.html', { root })
// });



// Get app running
app.listen(port, () => console.log(`App listening in port ${port}`));
