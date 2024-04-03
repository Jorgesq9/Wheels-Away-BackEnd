const { Schema, model } = require('mongoose');

const rentalSchema = new Schema(
  {
    car: {
      type: Schema.Types.ObjectId,
      ref: 'Car',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Rental = model('Rental', rentalSchema);

module.exports = Rental;