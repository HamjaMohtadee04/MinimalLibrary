const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  quantity: { type: Number, required: true },
  dueDate: { type: Date, required: true }
});

module.exports = mongoose.model('Borrow', borrowSchema);
