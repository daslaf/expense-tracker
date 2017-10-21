const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ExpenseSchema = {
  id: Number,
  date: Number,
  description: String,
  categories: [ String ]
};


module.exports = mongoose.model( 'Expense', ExpenseSchema );
