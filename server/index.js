import wiki from "wikijs";
const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "hfgame",
});

wiki()
  .page("Leopold II of Belgium")
  .then((page) => {
    // Perform multiple API calls and return a Promise that resolves with the data.
    const imagePromise = page.pageImage();
    const altPromise = page.info("alt");
    const urlPromise = page.url();
    const titlePromise = page.info("succession");

    return Promise.all([imagePromise, altPromise, urlPromise, titlePromise]);
  })
  .then(([image, imageAlt, url, title]) => {
    console.log("Image:", image);
    console.log("Image Alt:", imageAlt);
    console.log("URL:", url);
    console.log("Title:", title);

    // Insert data into the database and start the Express app.
    const sqlInsert = `INSERT INTO hf (name,image_url,title) VALUES ('${url}','${image}','${title}');`;
    return new Promise((resolve, reject) => {
      db.query(sqlInsert, (err, results) => {
        if (err) {
          console.error("Database error: " + err.message);
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  })
  .then(() => {
    app.get("/", (req, res) => {
      res.send("Inserted");
    });
  })
  .then(() => {
    app.listen(5174, () => {
      console.log("running on 5174");
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
