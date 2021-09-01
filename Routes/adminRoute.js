const express = require("express");
const router = express.Router();
const {
  getBookingTable,
  addBooking,
  deleteBooking,
  getBookingRef,
  updateBooking,
} = require("../Controllers/adminController");

//Admin - add reservation
router.get("/admin", getBookingTable);
router.post("/admin", addBooking);

//Admin - delete reservation, using bookingRef as route
router.delete("/admin/delete/:id", deleteBooking);

//Admin - update reservation
router.get("/editReservation/:id", getBookingRef);
router.post("/editReservation", updateBooking);

module.exports = router;
