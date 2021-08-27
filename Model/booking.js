const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  date: {type: Date, default: Date.now},
  bookingRef: {type: String},
  guestAmount: {type: Number},
  seatingTime: {type: String}, 

  customerInfo: {
    firstName: {type: String},
    lastName: {type:String},
    email: {type: String},
    tel: {type: Number},
    additionalInfo: {type:String}
    
  }
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;

