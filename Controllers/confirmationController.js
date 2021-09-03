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

// Collect booking with booking reference and send an email to the customer 
const getBookingRef = async (req, res) => {
  const renderBooking = await Booking.findOne({ bookingRef: req.params.id });
  res.json(renderBooking);
};

const deleteBooking = async (req, res) => {
  const bookingRef = req.params.id;

  // Collect bookingobject from DB and use to send email cancelled booking confirmation
  const deletedBooking = await Booking.findOne({ bookingRef: bookingRef});

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

module.exports = { getBookingRef, deleteBooking };
