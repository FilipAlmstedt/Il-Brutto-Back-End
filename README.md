# Il Brutto - server

Contributors: Filip Almstedt, Edvin Sjögren, Erik Åström

To watch our repository for the client, go to: [Il-Brutto-Front-End](https://github.com/FilipAlmstedt/Il-Brutto-Front-End.git)

---

## What is Il Brutto - server?

_This is a group project which was to create a MERN stack web application that a restaurant uses. Clients should be able to create reservations for tables in the resturant. Customer can also cancel the reservations if they need to._ 

_This is the repository for the server, the back-end so this is there we handle out functionality for our database, which is in MongoDB. The frameworks we use are Node.js with Mongoose and Express._ 

---

## Installation

To install and use the project:

1. Navigate to the directory where you want to put your repository,
2. Run `git clone https://github.com/FilipAlmstedt/Il-Brutto-Back-End.git`
3. Run `npm install` to install node modules and all the extra plugins that are needed.
4. Create a .gitignore-file and add node-modules to it
5. Create a .env-file and add the respective things: 

    ```javascript
    DATABASE_URL="YOUR_MONGODB_CLUSTER_URl"
    PORT="YOUR PORT YOU WANT TO USE"
    NODEMAILER_PASS="GMAIL_PASSWORD_YOU_USE_FOR_NODEMAILER"
    NODEMAILER_USER="GMAIL_EMAIL_YOU_USE_FOR_NODEMAILER"
    ```

---

## Naming conventions
_Below you'll find a brief summary of the naming conventions for this project_

### Variables

- Use let or const instead of var
- When naming variables use **camelCase**
    - Eg. `let variableName = ""` 
- When naming Mongoose schemas use **PascalCase**
    - Eg. `const User = mongoose.model("user", userSchema)`

---

## Project Structure:

```

├── index.js         # is placed directly under the root directory and is where all the other files and imported, used and runs.
├── .gitignore       # add folders and file to .gitignore that we don't want on Github.
├── .env             # store our important keys to database, whuch port to use and nodemailer account info.
├── Model/           # the Mongoose schema are placed in here. Our Bookingschema where we store our data regarding the reservation and the customer         
├── Controller/      # controller.js-files are placed here and the back-end functionality for our Admin-,Confirmation- and BookingPage is managed here.
├── Routes/          # the routes to the database are placed in here for our controllers to use.
└── Config/          # config.js is placed here so we can use our important secret keys from our .env-file and rename them to our own variable names and export them to be used in the project.
```
