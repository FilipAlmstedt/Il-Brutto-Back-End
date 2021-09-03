const Booking = require("../Model/booking");

const getBookingRef = async (req, res) => {
  const renderBooking = await Booking.findOne({ bookingRef: req.params.id });
  res.json(renderBooking);
};

const deleteBooking = async (req, res) => {
  const bookingRef = req.params.id;

  //deleting booking based on bookingRef
  await Booking.deleteOne({ bookingRef: bookingRef });
  res.send(`Booking with reference ${bookingRef} has been deleted`);
};

module.exports = { getBookingRef, deleteBooking };
