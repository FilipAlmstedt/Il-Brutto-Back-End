const express = require("express");
const router = express.Router();

//Importera controllers här

//ConfirmationPage - Collect specific reservation
router.get("/confirmReservation/:id", /* ConfirmationController som ska hitta en specifik bokning */);

//ConfirmationPage - Delete specific reservation
router.get("/deleteReservation/:id", /* Controller som ska radera specifik bokning */);

module.exports = router;