import wiki from "wikijs"; //simplified wikipedia API
import express from "express";
import mysql from "mysql";
const app = express();

//connecting to database
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "hfgame",
});
//array with historical figures names
const ok = ["Alexander The Great", "Adolf Hilter"];
for (let i = 0; i < 2; i++) {
  wiki()
    .page(`${ok[i]}`)
    .then((page) => {
      //GET required information from wiki API
      const imagePromise = page.pageImage();
      const altPromise = page.info("alt");
      const urlPromise = page.url();
      let titlePromise;
      let timePromise;

      titlePromise = page.info("office");

      const termStartPromise = page.info("termStart");
      const termEndPromise = page.info("termEnd");

      timePromise = Promise.all([termStartPromise, termEndPromise]).then(
        ([termStart, termEnd]) => {
          return `${termStart} - ${termEnd}`;
        }
      );

      //return all Promises as one
      return Promise.all([
        imagePromise,
        altPromise,
        urlPromise,
        titlePromise,
        timePromise,
      ]);
    }) //display the information
    .then(([image, imageAlt, url, title, time]) => {
      console.log("Image:", image);
      console.log("Image Alt:", imageAlt);
      console.log("URL:", url);
      console.log("Title:", title);
      console.log("Time:", time);

      //insert the information into the database
      const sqlInsert = `INSERT INTO hf 
                        (name, image_url,image_alt, title, page_url, title_time)
                         VALUES (?, ?, ?, ?, ? ,?);`;
      const values = [ok[i], image, imageAlt, title, url, time];

      return new Promise((resolve, reject) => {
        db.query(sqlInsert, values, (err, results) => {
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
      //log text if successful
      app.get("/", (req, res) => {
        res.send("Inserted");
      });

      app.listen(5174, () => {
        console.log("running on 5174");
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
