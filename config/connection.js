// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "ericdahan",
  password: "mysql",
  database: "burger_db"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("[DB ERROR] Error connecting: " + err.stack);
    return;
  }
  console.log(
    `[DB CONNECTION] Connected to http://localhost:3306 on thread ${
      connection.threadId
    }`
  );
});

// Export connection
module.exports = connection;
