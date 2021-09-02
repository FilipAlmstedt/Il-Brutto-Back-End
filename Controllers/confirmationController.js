const Booking = require("../Model/booking");

const getBookingRef = async (req, res) => {
  const renderBooking = await Booking.findOne({ bookingRef: req.params.id });
  console.log(renderBooking);
  res.json(renderBooking);
};

const deleteBooking = async (req, res) => {};

module.exports = { getBookingRef, deleteBooking };
