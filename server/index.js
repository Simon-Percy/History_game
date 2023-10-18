const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "hfgame",
});
app.get("/", (req, res) => {
  const sqlInsert = "INSERT INTO hf (name) VALUES ('THAT GUY');";
  db.query(sqlInsert, (err, results) => {
    if (err) {
      console.error("Database error: " + err.message);
      res.status(500).send("Internal Server Error");
    } else {
      res.send("Record inserted successfully.");
    }
  });
});

app.listen(5174, () => {
  console.log("running on 5174");
});
