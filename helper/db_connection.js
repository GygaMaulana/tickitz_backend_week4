//connect ke database
const mysql = require("mysql");
const db = mysql.createConnection({
  host      : "localhost",
  user      : "root",
  password  : "",
  database  : "db_tickitz",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Database Connected");
});

module.exports = db