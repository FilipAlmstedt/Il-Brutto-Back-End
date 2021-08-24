const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

/*const flash = require("express-flash");
const session = require("express-session");*/

//Importing routes
const adminRoute = require("./Routes/adminRoute");
const bookingRoute = require("./Routes/bookingRoute");
const confirmationRoute = require("./Routes/confirmationRoute");

const {database, databasePort} = require("./Config/config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoute);
app.use(bookingRoute);
app.use(confirmationRoute);

// Används för flash-meddelanden. Importera sen!!!
//Use for express-flash/express-session
/*app.use(
  session({
    secret: flashKey,
    saveUninitialized: true,
    resave: false,
  })
);
app.use(flash());*/

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};
  
mongoose.connect(database, options, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    app.listen(databasePort || 8002, () => {
      console.log("app is running");
    });
});