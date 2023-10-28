const express = require('express');
const {
  getAllVarieties,
  getVarietyById,
  createVariety,
  updateVariety,
  deleteVariety
} = require('../controllers/varieties');
const { auth } = require('../../middlewares/authentication');

const router = express.Router();

router.get('/', getAllVarieties);
router.get('/:id', getVarietyById);
router.post('/', auth, createVariety);
router.put('/:id', auth, updateVariety);
router.delete('/:id', auth, deleteVariety);

module.exports = router;
