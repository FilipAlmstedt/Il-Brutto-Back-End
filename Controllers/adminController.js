const Booking = require("../Model/booking");
const nodemailer = require("nodemailer");
const { nodeMailerPassword, nodeMailerUser } = require("../Config/config");

// Transport to initiate nodemailer
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: nodeMailerUser,
    pass: nodeMailerPassword,
  },
});

// Find all bookings in DB and send to front end
const getBookingTable = async (req, res) => {
  const bookings = await Booking.find();
  res.send(bookings);
};

// Collect booking info and store in DB
const addBooking = async (req, res) => {
  const { date, bookingRef, seatingTime, guestAmount, customerInfo } = req.body;

  await new Booking({
    date: date,
    bookingRef: bookingRef,
    seatingTime: seatingTime,
    guestAmount: guestAmount,
    customerInfo: customerInfo,
  }).save();

  // After we add a reservation to DB, collect that object and send a confirmation mail
  const sendMailBookingInfo = await Booking.findOne({ bookingRef: bookingRef });

  // Send confirmation mail with a link, to the confirmation page showing the booking information
  await transport.sendMail({
    from: nodeMailerUser,
    to: sendMailBookingInfo.customerInfo.email,
    subject: "Thank you for your reservation!",
    html: `
          <h1>Thank you for your reservation ${sendMailBookingInfo.customerInfo.firstName}!</h1>
          
          <p>For more information regarding your reservation information, visit <a href="http://localhost:3000/confirmation/${sendMailBookingInfo.bookingRef}">this link</a></p>

          <p> To visit our website, please click <a href="http://localhost:3000/">here!</a></p>

          <p>Have a good meal!,</p>
          <p>Il Brutto</p>

        `,
  });

  res.send("Added new reservation to customer from Admin!");
};

// Collect one specfic booking object from DB that is used for the edit component in Front-End
const getBookingRef = async (req, res) => {
  const editBooking = await Booking.findOne({ bookingRef: req.params.id });
  res.json(editBooking);
};

// Collect a booking object and update in DB
const updateBooking = async (req, res) => {
  // Collect attributes from front-end object
  const { date, bookingRef, seatingTime, guestAmount, customerInfo } = req.body;

  // Update in DB
  await Booking.updateOne(
    { bookingRef: bookingRef },
    {
      date: date,
      seatingTime: seatingTime,
      guestAmount: guestAmount,
      customerInfo: customerInfo,
    }
  );
  res.send("updated booking")
};

// Collect id which is booking ref and delete said reservation in DB
const deleteBooking = async (req, res) => {
  const bookingRef = req.params.id;

  // Collect bookingobject from DB and use to send email cancelled booking confirmation
  const deletedBooking = await Booking.findOne({ bookingRef: bookingRef });

  // Send confirmation mail with a link, to confirm that the reservation has been cancelled
  await transport.sendMail({
    from: nodeMailerUser,
    to: deletedBooking.customerInfo.email,
    subject: "Your reservation has been cancelled!",
    html: `
        <h1>Sorry to hear you had to cancel the reservation ${deletedBooking.customerInfo.firstName}!</h1>

        <p> To visit our website, please click <a href="http://localhost:3000/">here!</a></p>

        <p>Have a good meal!,</p>
        <p>Il Brutto</p>

      `,
  });

  //deleting booking based on bookingRef
  await Booking.deleteOne({ bookingRef: bookingRef });
  res.send(`Booking with reference ${bookingRef} has been deleted`);
};

module.exports = {
  getBookingTable,
  addBooking,
  getBookingRef,
  updateBooking,
  deleteBooking,
};
