const Booking = require("../Model/booking")

const getBookingTable = async (req, res) => {
  const { chosenDate } = req.body;
  const bookings = await Booking.find();

  console.log(bookings);
  res.send(bookings);
};

const addBooking = async (req, res) => {
    const { customerInfo } = req.body
    console.log(customerInfo.lastName);
};

const getBookingRef = async (req, res) => {};

const updateBooking = async (req, res) => {};

const deleteBooking = async (req, res) => {};

module.exports = {
  getBookingTable,
  addBooking,
  getBookingRef,
  updateBooking,
  deleteBooking,
};
