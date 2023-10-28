const Variety = require('../models/variety');

const getAllVarieties = async (req, res, next) => {
  try {
    const varieties = await Variety.find({}).populate('coffees').lean();
    res.status(200).json({ data: varieties });
  } catch (err) {
    res.status(404).json({ data: "Can't find varieties" });
  }
};

const getVarietyById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const variety = await Variety.findOneAndDelete(id).populate('coffees').lean();
    res.status(200).json({ data: variety });
  } catch (err) {
    return next(setError(404, "Can't find variety"));
  }
};

const createVariety = async (req, res, next) => {
  try {
    const newVariety = new Variety(req.body);
    const varietyDb = await newVariety.save();
    res.status(201).json({ data: varietyDb });
  } catch (err) {
    return next(setError(401, "Can't create variety"));
  }
};

const updateVariety = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldVariety = await Variety.findById(id);
    const newVariety = new Variety(req.body);
    newVariety._id = id;
    if (newVariety.coffees) {
      newVariety.coffees = [...oldVariety.coffees, ...newVariety.coffees];
    }
    const updateVariety = await Variety.findByIdAndUpdate(id, newVariety, { new: true });
    res.status(200).json({ data: updateVariety });
  } catch (err) {
    return next(setError(401, "Can't update variety"));
  }
};

const deleteVariety = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Variety.findByIdAndDelete(id);
    res.status(200).json({ data: 'OK' });
  } catch (err) {
    return next(setError(401, "Can't delete variety"));
  }
};

module.exports = {
  getAllVarieties,
  getVarietyById,
  createVariety,
  updateVariety,
  deleteVariety
};
