const express = require("express");
const router = express.Router();
const {
  getBookingTable,
  addBooking,
} = require("../Controllers/bookingController");

router.get("/reservations", getBookingTable);
router.post("/reservations", addBooking);

module.exports = router;
