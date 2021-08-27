const Booking = require("../Model/booking");
const getBookingTable = async (req, res) => {
  const { chosenDate } = req.body;
  const bookings = await Booking.find({ date: chosenDate });

  res.send(bookings);
};

const addBooking = async (req, res) => {};

module.exports = { getBookingTable, addBooking };
