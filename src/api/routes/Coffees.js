const express = require('express');
const {
  getAllCoffees,
  getCoffeeById,
  createCoffee,
  updateCoffee,
  deleteCoffee
} = require('../controllers/coffees');
const { auth } = require('../../middlewares/authentication');
const uploadFile = require('../../middlewares/uploadFile');

const router = express.Router();

router.get('/', getAllCoffees);
router.get('/:id', getCoffeeById);
router.post('/', auth, uploadFile.single('image'), createCoffee);
router.put('/:id', auth, uploadFile.single('image'), updateCoffee);
router.delete('/:id', auth, deleteCoffee);

module.exports = router;
