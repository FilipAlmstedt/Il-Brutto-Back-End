const express = require("express");
const router = express.Router();
const {
  getBookingRef,
  deleteBooking,
} = require("../Controllers/confirmationController");

//ConfirmationPage - Collect specific reservation
router.get("/confirmedReservation/:id", getBookingRef);

//ConfirmationPage - Delete specific reservation
router.delete("/deleteReservation/:id", deleteBooking);

module.exports = router;
