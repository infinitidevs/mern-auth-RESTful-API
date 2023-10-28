const { setError } = require('../../config/error');
const { deleteFile } = require('../../middlewares/deleteFile');
const Coffee = require('../models/coffee');

const getAllCoffees = async (req, res, next) => {
  try {
    const coffees = await Coffee.find({}).populate('variety').lean();
    res.status(200).json({ data: coffees });
  } catch (err) {
    return next(setError(404, "Can't find coffees"));
  }
};

const getCoffeeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const coffee = await Coffee.findById(id).populate('variety').lean();
    res.status(200).json({ data: coffee });
  } catch (err) {
    return next(setError(404, "Can't find coffee"));
  }
};

const createCoffee = async (req, res, next) => {
  try {
    const newCoffee = new Coffee(req.body);
    if (req.file) {
      newCoffee.image = req.file.path;
    }
    const coffeeDb = await newCoffee.save();
    res.status(201).json({ data: coffeeDb });
  } catch (err) {
    return next(setError(401, "Can't create exercise"));
  }
};

const updateCoffee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldCoffee = await Coffee.findById(id);
    const newCoffee = new Coffee(req.body);
    if (req.file) {
      newCoffee.image = req.file.path;
      if (oldCoffee.image) {
        deleteFile(oldCoffee.image);
      }
    }
    newCoffee._id = id;
    if (newCoffee.variety) {
      newCoffee.variety = [...oldCoffee.variety, ...newCoffee.variety];
    }
    const updateCoffee = await Coffee.findByIdAndUpdate(id, newCoffee, { new: true });
    res.status(200).json({ data: updateCoffee });
  } catch (err) {
    return next(setError(401, "Can't update coffee"));
  }
};

const deleteCoffee = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Coffee.findByIdAndDelete(id);
    res.status(200).json({ data: 'OK' });
  } catch (err) {
    return next(setError(401, "Can't delete coffee"));
  }
};

module.exports = {
  getAllCoffees,
  getCoffeeById,
  createCoffee,
  updateCoffee,
  deleteCoffee
};
