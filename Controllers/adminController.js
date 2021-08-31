const Booking = require("../Model/booking")

const getBookingTable = async (req, res) => {
  const { chosenDate } = req.body;
  const bookings = await Booking.find();

  //console.log(bookings);
  res.send(bookings);
};

const addBooking = async (req, res) => {
    const { date, bookingRef, seatingTime, guestAmount ,customerInfo } = req.body
    console.log(customerInfo);
    console.log(date);
    console.log(bookingRef);
    console.log(seatingTime);
    console.log(guestAmount);

    await new Booking ({
      date:date,
      bookingRef:bookingRef,
      seatingTime:seatingTime,
      guestAmount:guestAmount,
      customerInfo:customerInfo


    }).save();
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
