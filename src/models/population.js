const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PopulationSchema = new Schema(
  {
    location: String,
    locationType: String,
    delegation: String,
    state: String,
    city: String,
    zone: String,
    delegationCode: {
      type: String,
      validate: (value) => /[0-9]{4}/.test(value),
    },
    stateCode: {
      type: String,
      validate: (value) => /[0-9]{2}/.test(value),
    },
    officeKey: {
      type: String,
      validate: (value) => /[0-9]{5}/.test(value),
    },
    zipCode: { type: Schema.Types.ObjectId, ref: 'ZipCode' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Population', PopulationSchema);
