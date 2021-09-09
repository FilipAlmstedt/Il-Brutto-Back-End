const Booking = require("../Model/booking");
const nodemailer = require("nodemailer")
const {
  nodeMailerPassword,
  nodeMailerUser
} = require("../Config/config");

// Transport to initiate nodemailer
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: nodeMailerUser,
    pass: nodeMailerPassword,
  },
});
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

  res.send("Added a reservation to new customer!")
};

module.exports = { getBookingTable, addBooking };
