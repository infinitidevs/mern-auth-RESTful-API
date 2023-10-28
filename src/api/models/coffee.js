const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    scaScore: {
      type: Number,
      required: true
    },
    process: {
      type: String,
      required: true,
      trim: true
    },
    varietyType: {
      type: String,
      required: true,
      trim: true
    },
    variety: { type: mongoose.Types.ObjectId, ref: 'Variety' },
    altitude: {
      type: String,
      required: true,
      trim: true
    },
    taste: {
      type: String,
      required: true,
      trim: true
    },
    grinding: {
      type: String,
      required: true,
      trim: true
    },
    roasting: {
      type: String,
      required: true,
      trim: true
    },
    region: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true
    },
    grams: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: false,
      trim: true
    }
  },
  {
    timestamps: true,
    collection: 'coffees'
  }
);

const Coffee = mongoose.model('Coffee', coffeeSchema, 'coffees');

module.exports = Coffee;
