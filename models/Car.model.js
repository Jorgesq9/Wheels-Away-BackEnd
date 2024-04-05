const {Schema, model} = require('mongoose');

const carSchema = new Schema(
    {
      
      make: {
        type: String,
        required: true,
      },
      model: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      images: {
        type: [String],
      },
      licensePlate: {
        type: String,
        required: true,
        unique: true,
      },
      doors: {
        type: String,
        required: true,
      },
      passengers: {
        type: String,
        required: true,
      },
      transmission: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      extras: {
        // enum type
        type: [String],
        enum: ['GPS', 'Radio', 'Sunroof', 'Leather seats','Autopilot','Off-road package','Heated seats'],
      },
      pricePerDay: {
        type: Number,
        required: true,
      },
    },
    { timestamps: true },
  );

const Car = model('Car', carSchema)
module.exports = Car;