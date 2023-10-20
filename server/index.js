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
const figures = [
  "Winston Churchill",
  "Adolf Hilter",
  "Franklin Roosevelt",
  "Joseph Stalin",
  "Harry Truman",
  "Woodrow Wilson",
  "Vladimir Lenin",
  "Julius Caesar",
  "George Washington",
  "Napoleon Bonaparte",
  "Abraham Lincoln",
  "Mao Zedong",
  "Thomas Jefferson",
  "John F. Kennedy",
  "Nelson Mandela",
  "Mikhail Gorbachev",
  "Theodore Roosevelt",
  "Pol Pot",
  "Richard Nixon",
  "Saddam Hussein",
  "George W. Bush",
  "Kim Il Sung",
  "Ismail Enver Pasha",
  "Ronald Reagan",
  "General Josip Tito",
  "José de San Martín",
  "Simon Bolivar",
  "Robert Mugabe",
  "Muammar al-Gaddafi",
  "Che Guevara",
  "Sir Seretse Khama",
  "",
];
/*
const figures = [
  "Emperor Hirohito",
  "Tsar Nicholas II",
  "Alexander the Great",
  "King Arthur",
  "Genghis Khan",
  "Cleopatra",
  "Catherine the Great",
  "Queen Victoria",
  "14th Dalai Lama",
  "Attila the Hun",
  "Queen Elizabeth II",
  " Henry VIII of England",
  "Queen Elizabeth I of England",
  "Vlad the Impaler",
  "Cyrus the Great",
  "Constantine the Great",
  "Charlemagne",
  "Kaiser Wilhelm II",
  "Qin Shi Huang",
  "Caesar Augustus",
  " William the Conqueror",
  "Elizabeth I",
  "Franz Joseph I of Austria",
  "Louis XIV",
];


const figures = [
  "Albert Einstein",
  "Robert Oppenheimer",
  "Gavrilo Princep",
  "Thomas Edison",
  "Nikola Tesla",
  "Socrates",
  "Christopher Columbus",
  "Leonardo da Vinci",
  "William Shakespeare",
  "Charles Darwin",
  "Karl Marx",
  "Louis Pasteur",
  "Mahatma Gandhi",
  "Mother Teresa",
  "Pope John Paul II",
  "Martin Luther King",
  "Muhammad Ali",
  "Aristotle",
  "Charles Dickens",
  "Osama bin Laden",
  " Michael Jackson",
  "Martin Luther",
  "Galileo Galilei",
  "Plato",
  "Frederick Douglass",
  "Malcolm X",
  "Elvis Presley",
  "Walt Disney",
  "Charlie Chaplin",
  "John Lennon",
  "Steve Jobs",
  "Henry Ford",
  "Rosa Parks",
  "Pablo Picasso",
  "Grigori Rasputin",
  "Sun Tzu",
  "Zhang Zongchang",
  "Steve Irwin",
  "Bob Ross",
  "Douglas MacArthur",
  "Spartacus",
  "Diogenes",
  "Sigmund Freud"
];
*/
for (let i = 0; i < 2; i++) {
  wiki()
    .page(`${figures[i]}`)
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
      const sqlInsert = `INSERTt INTO hf 
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
