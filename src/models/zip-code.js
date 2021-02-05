const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ZipCode = new Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      validate: (value) => /[0-9]{5}/.test(value),
    },
    populations: [{ type: Schema.Types.ObjectId, ref: 'Population' }],
  },
  { timestamps: true },
);

module.exports = ZipCode;
