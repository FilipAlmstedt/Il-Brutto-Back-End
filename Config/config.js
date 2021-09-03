require("dotenv").config();

const database = process.env.DATABASE_URL;
const databasePort = process.env.PORT;
const nodeMailerPassword = process.env.NODEMAILER_PASS;
const nodeMailerUser = process.env.NODEMAILER_USER;

//Skapa en flashkey for express-session om det behövs!

module.exports = {
    database,
    databasePort,
    nodeMailerPassword,
    nodeMailerUser
}