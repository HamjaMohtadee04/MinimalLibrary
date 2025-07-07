const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrow.controller');

router.post('/:bookId', borrowController.borrowBook);
router.get('/summary', borrowController.getBorrowSummary);

module.exports = router;
