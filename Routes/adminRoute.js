const express = require("express");
const router = express.Router();

//Importera controllers här

//Admin - add reservation
router.get("/admin", /*adminController för att kunna rendera ut resultat*/);
router.post("/admin", /*adminController för att lägga till nya bokningar*/);

//Admin - delete reservation
router.get("deleteReservation/:id", /*adminController för att radera bokningar*/);

//Admin - update reservation
router.get("/editReservation/:id", /*adminController som ska hitte en specifik bokning man vill uppdatera*/ );
router.post("/editReservation", /*AdminController som ska uppdatera en bokning*/);

module.exports = router;