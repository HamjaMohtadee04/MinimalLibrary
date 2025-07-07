const Book = require('../models/book.model');
const Borrow = require('../models/borrow.model');

exports.borrowBook = async (req, res) => {
  const { quantity, dueDate } = req.body;
  const book = await Book.findById(req.params.bookId);

  if (!book) return res.status(404).json({ error: 'Book not found' });
  if (quantity > book.copies) return res.status(400).json({ error: 'Not enough copies available' });

  book.copies -= quantity;
  book.available = book.copies > 0;
  await book.save();

  const borrow = new Borrow({ book: book._id, quantity, dueDate });
  await borrow.save();

  res.json({ message: 'Book borrowed successfully' });
};

exports.getBorrowSummary = async (req, res) => {
  const summary = await Borrow.aggregate([
    {
      $group: {
        _id: "$book",
        totalQuantity: { $sum: "$quantity" }
      }
    },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "bookDetails"
      }
    },
    {
      $unwind: "$bookDetails"
    },
    {
      $project: {
        title: "$bookDetails.title",
        isbn: "$bookDetails.isbn",
        totalQuantity: 1
      }
    }
  ]);
  res.json(summary);
};
