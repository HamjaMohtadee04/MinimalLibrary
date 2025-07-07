const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  genre: String,
  isbn: { type: String, unique: true, required: true },
  description: String,
  copies: { type: Number, default: 1 },
  available: { type: Boolean, default: true }
});

bookSchema.pre('save', function (next) {
  this.available = this.copies > 0;
  next();
});

module.exports = mongoose.model('Book', bookSchema);
