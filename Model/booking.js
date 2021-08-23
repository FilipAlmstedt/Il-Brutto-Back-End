const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  date: {type: new Date},
  name: {type: String},
  email: {type: String},
  tel: {type: Number},
  bookingref: {type: String},
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;