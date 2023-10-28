const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema(
  {
    _coffeeId: {
      type: Number,
      required: false
    },
    _variety: {
      type: Number,
      required: false
    },
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

const varietySchema = new mongoose.Schema(
  {
    _varietyId: {
      type: Number,
      required: false
    },
    _coffees: [{ type: Number }],
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
    origin: {
      type: String,
      required: true,
      trim: true
    },
    coffees: [{ type: mongoose.Types.ObjectId, ref: 'Coffee' }]
  },
  {
    timestamps: true,
    collection: 'varieties'
  }
);

const Coffee = mongoose.model('Coffee', coffeeSchema, 'coffees');
const Variety = mongoose.model('Variety', varietySchema, 'varieties');

module.exports = {
  Coffee,
  Variety
};
