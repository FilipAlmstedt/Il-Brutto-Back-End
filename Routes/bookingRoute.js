const express = require("express");
const router = express.Router();

//Importera controllers här

router.get("/reservations", /*BookingController för att visa lediga tider*/);
router.post("/reservations", /*BookingController to make a reservation*/);

module.exports = router;