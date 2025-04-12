const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  income: {type:Number},
  expenses:  {type:Number},
  savings:  {type:Number},
  debts:  {type:Number},
  createdAt: { type: Date, default: Date.now }
});

const finance= mongoose.model('Finance', financeSchema);

module.exports={finance}