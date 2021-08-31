const Booking = require("../Model/booking")

const getBookingTable = async (req, res) => {
  const { chosenDate } = req.body;
  const bookings = await Booking.find();

  //console.log(bookings);
  res.send(bookings);
};

const addBooking = async (req, res) => {
    const { date, bookingRef, seatingTime, guestAmount , customerInfo } = req.body
    console.log(customerInfo);
    console.log(date);
    console.log(bookingRef);
    console.log(seatingTime);
    console.log(guestAmount);

    await new Booking ({
      date: date,
      bookingRef: bookingRef,
      seatingTime: seatingTime,
      guestAmount: guestAmount,
      customerInfo: customerInfo
    }).save();

};

// Collect one specfic booking object from DB that is used for the edit component in Front-End
const getBookingRef = async (req, res) => {
  const editBooking = await Booking.findOne({bookingRef: req.params.id});
  res.json(editBooking);
};

// Collect a booking object and update in DB
const updateBooking = async (req, res) => {
  // Collect attributes from front-end object
  const { date, bookingRef, seatingTime, guestAmount , customerInfo } = req.body;

  // Update in DB
  await Booking.updateOne(
    {bookingRef: bookingRef},
    {
      date: date,
      seatingTime: seatingTime,
      guestAmount: guestAmount,
      customerInfo: customerInfo
    }
  );
};

const deleteBooking = async (req, res) => {};

module.exports = {
  getBookingTable,
  addBooking,
  getBookingRef,
  updateBooking,
  deleteBooking,
};
