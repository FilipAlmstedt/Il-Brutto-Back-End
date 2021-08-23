require("dotenv").config();

const database = process.env.DATABASE_URL;
const databasePort = process.env.PORT;

//Skapa en flashkey for express-session om det behövs!

module.exports = {
    database,
    databasePort
}