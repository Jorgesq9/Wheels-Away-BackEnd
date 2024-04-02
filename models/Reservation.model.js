const { Schema, model } = require('mongoose');

const reservationSchema = new Schema ({
car: {
    type: Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  finishDate: {
    type: Date,
    required: true
  },
  office:{
    type: String,
    required: true
  }
})

const Reservation = model('Reservation', reservationSchema);

module.exports = Reservation;