const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('./models/user');
const Expense = require('./models/expense');

const userController = require('./controllers/user');


//------------------------------//
//                              //
// API for Authentication       //
//                              //
//------------------------------//


router.post('/authentication', userController.registerUser);



router.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if ( err ) return res.send(err);

    // If the user e-mail is not found in the DB
    if ( !user || user === null ) {
      res.send({
        message: "Bonkers! This user doesn't exist. Please create an account to proceed"
      })
    } else {
      bcrypt.compare(password, user.password).then(didMatch => {
        res.send({
          didMatch, 
          message: didMatch ? "Redirecting" : "Password incorrect"
        });
      });
    }

  });
})


//------------------------------//
//                              //
// API for Expenses             //
//                              //
//------------------------------//



router.get('/expenses', (req, res) => {
  Expense.find({}, (err, expenses) => {
    if (err) res.send(err);

    res.json(expenses);
  });
});

router.post('/expenses', (req, res) => {
  const { id, date, description, category } = req.body;
  
  // If all fields exist 
  if (id, date, description, category) {
    // create expense
    const expense = new Expense({ 
      id, 
      date, 
      description, 
      category 
    });
  
    expense.save(err => {
      if (err) res.send(err);

      res.json({ 
        message: 'Expense successfully added!' 
      });
    });
  }
});



//------------------------------//
//                              //
// API for Greetings            //
//                              //
//------------------------------//



router.get('/greetings', (req, res) => {
  res.json({
    message: 'Greeeetings, hoooman! 🐱‍🚀'
  });
});



module.exports = router;