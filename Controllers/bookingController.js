const Booking = require("../Model/booking");

// Request to get all bookings to then see which reservations that are availible
const getBookingTable = async (req, res) => {
  const bookings = await Booking.find();

  res.json(bookings);
};

// Add a reservation as a customer
const addBooking = async (req, res) => {
  const { date, bookingRef, seatingTime, guestAmount, customerInfo } = req.body;

  await new Booking ({
    date: date,
    bookingRef: bookingRef,
    seatingTime: seatingTime,
    guestAmount: guestAmount,
    customerInfo: customerInfo
  }).save();

  res.send("Added a reservation to new customer!")
};

module.exports = { getBookingTable, addBooking };
