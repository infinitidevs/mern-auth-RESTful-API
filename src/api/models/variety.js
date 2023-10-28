const mongoose = require('mongoose');

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

const Variety = mongoose.model('Variety', varietySchema, 'varieties');

module.exports = Variety;
