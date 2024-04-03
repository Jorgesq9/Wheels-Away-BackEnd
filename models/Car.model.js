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
      extras: {
        // enum type
        type: [String],
        enum: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
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