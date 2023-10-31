//import wiki from "wikijs"; //simplified wikipedia API
//import mysql from "mysql";
import express from "express";
import fs from "fs";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
//connecting to database
// dba20183-16a1-4692-8b6f-d7a5e653cf21

/*const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "hfgame",
});
/*
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
  "Henry VIII of England",
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
  "Sigmund Freud",
  "Robin Williams",
  "Alfred Hitchcock",
  "Benjamin Franklin",
];
/*
const figurePromises = figures.map((figure) => {
  return wiki()
    .page(`${figure}`)
    .then((page) => {
      GET required information from wiki API
      const imagePromise = page.pageImage();
      const altPromise = page.info("alt");
      const urlPromise = page.url();
      const titlePromise = page.info("knownFor");
      const timePromise = page.info("reign");

      titlePromise = page.info("office");

      const termStartPromise = page.info("termStart");
      const termEndPromise = page.info("termEnd");

      /* timePromise = Promise.all([termStartPromise, termEndPromise]).then(
        ([termStart, termEnd]) => {
          return `${termStart} - ${termEnd}`;
        }
      );
        
      return all Promises as one
      return Promise.all([
        imagePromise,
        altPromise,
        urlPromise,
        titlePromise,
         timePromise,
      ]);
    }) //display the information
    .then(([image, imageAlt, url, title]) => {
      insert the information into the database
      
      const sqlInsert = `INSERT INTO hf(name, image_url,image_alt, title, page_url) VALUES (?, ?, ?, ?, ?);`;
      const values = [figure, image, imageAlt, title, url];

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
    });
});

Promise.all(figurePromises)
  .then(() => {
    show text if successful
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
*/

//select all inserted data from the database

//const sqlSelect = "SELECT * FROM hf";
app.get("/", (req, res) => {
  /*db.query(sqlSelect, (err, results) => {
    if (err) {
      console.error("Database error: " + err.message);
      res.status(500).send("Database error: " + err.message);
      return;
    }
*/

  res.json([
    {
      id: 1,
      name: "Ronald Reagan",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/1/16/Official_Portrait_of_President_Reagan_1981.jpg",
      image_alt: "Reagan's presidential portrait, 1981",
      title: "President of the United States",
      page_url: "https://en.wikipedia.org/wiki/Ronald_Reagan",
      title_time: "January 20, 1981 - January 20, 1989",
    },
    {
      id: 2,
      name: "José de San Martín",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/d/d1/Jos%C3%A9_de_San_Mart%C3%ADn_%28retrato%2C_c.1828%29.jpg",
      image_alt:
        "Portrait of José de San Martín, raising the flag of Argentina",
      title: "The Liberator of America",
      page_url: "https://en.wikipedia.org/wiki/Jos%C3%A9_de_San_Mart%C3%ADn",
      title_time: "1789 - 1822",
    },
    {
      id: 3,
      name: "Vladimir Lenin",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/c0/Lenin_in_1920_%28cropped%29.jpg",
      image_alt: null,
      title:
        "Chairman of the Council of People's Commissars of the Soviet Union",
      page_url: "https://en.wikipedia.org/wiki/Vladimir_Lenin",
      title_time: "6 July 1923 - 21 January 1924",
    },
    {
      id: 4,
      name: "Joseph Stalin",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Joseph_Stalin%2C_1950_%28cropped%29.jpg",
      image_alt: null,
      title: "General Secretary of the Communist Party of the Soviet Union",
      page_url: "https://en.wikipedia.org/wiki/Joseph_Stalin",
      title_time: "3 April 1922 - 16 October 1952",
    },
    {
      id: 5,
      name: "Pol Pot",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/Pol_Pot.jpg",
      image_alt: null,
      title: "General Secretary of the Communist Party of Kampuchea",
      page_url: "https://en.wikipedia.org/wiki/Pol_Pot",
      title_time: "22 February 1963 - 6 December 1981",
    },
    {
      id: 6,
      name: "Abraham Lincoln",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg",
      image_alt: "A bearded Abraham Lincoln showing his head and shoulders",
      title: "President of the United States",
      page_url: "https://en.wikipedia.org/wiki/Abraham_Lincoln",
      title_time: "March 4, 1861 - April 15, 1865",
    },
    {
      id: 7,
      name: "Mao Zedong",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/0/0a/Mao_Zedong_in_1959_%28cropped%29.jpg",
      image_alt: null,
      title: "Chairman of the Communist Party of China",
      page_url: "https://en.wikipedia.org/wiki/Mao_Zedong",
      title_time: "20 March 1943 - 9 September 1976",
    },
    {
      id: 8,
      name: "George Washington",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
      image_alt: "Head and shoulders portrait of George Washington",
      title: "President of the United States",
      page_url: "https://en.wikipedia.org/wiki/George_Washington",
      title_time: "April 30, 1789 - March 4, 1797",
    },
    {
      id: 9,
      name: "Julius Caesar",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/6/62/Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg",
      image_alt: "The Tusculum portrait, a marble sculpture of Julius Caesar.",
      title: "Dictator perpetuo",
      page_url: "https://en.wikipedia.org/wiki/Julius_Caesar",
      title_time: "44 - 15 March 44 BC",
    },
    {
      id: 10,
      name: "Franklin Roosevelt",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/4/42/FDR_1944_Color_Portrait.jpg",
      image_alt:
        "Franklin Roosevelt, 62, has graying hair and faces the camera.",
      title: "President of the United States",
      page_url: "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt",
      title_time: "March 4, 1933 - April 12, 1945",
    },
    {
      id: 11,
      name: "George W. Bush",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg",
      image_alt: "Bush's official presidential portrait, 2003",
      title: "President of the United States",
      page_url: "https://en.wikipedia.org/wiki/George_W._Bush",
      title_time: "January 20, 2001 - January 20, 2009",
    },
    {
      id: 12,
      name: "Saddam Hussein",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Saddam_Hussein_in_1998.png",
      image_alt: null,
      title: "President of Iraq",
      page_url: "https://en.wikipedia.org/wiki/Saddam_Hussein",
      title_time: "16 July 1979 - 9 April 2003",
    },
    {
      id: 13,
      name: "John F. Kennedy",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg",
      image_alt: "President Kennedy smiling",
      title: "President of the United States",
      page_url: "https://en.wikipedia.org/wiki/John_F._Kennedy",
      title_time: "January 20, 1961 - November 22, 1963",
    },
    {
      id: 14,
      name: "Nelson Mandela",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg",
      image_alt: "Mandela, 76, in a portrait photograph",
      title: "President of South Africa",
      page_url: "https://en.wikipedia.org/wiki/Nelson_Mandela",
      title_time: "10 May 1994 - 14 June 1999",
    },
    {
      id: 15,
      name: "Muammar al-Gaddafi",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/e/e5/Moamer_el_Gadafi_%28cropped%29.jpg",
      image_alt: null,
      title: "Brotherly Leader and Guide of the Revolution",
      page_url: "https://en.wikipedia.org/wiki/Muammar_Gaddafi",
      title_time: "2 March 1979 - 20 October 2011",
    },
    {
      id: 16,
      name: "Mikhail Gorbachev",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/RIAN_archive_850809_General_Secretary_of_the_CPSU_CC_M._Gorbachev_%28cropped%29.jpg",
      image_alt: null,
      title: "General Secretary of the Communist Party of the Soviet Union",
      page_url: "https://en.wikipedia.org/wiki/Mikhail_Gorbachev",
      title_time: "11 March 1985 - 24 August 1991",
    },
    {
      id: 17,
      name: "Theodore Roosevelt",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/6/64/President_Roosevelt_-_Pach_Bros_%28cropped%29.jpg",
      image_alt: null,
      title: "President of the United States",
      page_url: "https://en.wikipedia.org/wiki/Theodore_Roosevelt",
      title_time: "September 14, 1901 - March 4, 1909",
    },
    {
      id: 18,
      name: "Richard Nixon",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/Richard_Nixon_presidential_portrait_%281%29.jpg",
      image_alt: "Presidential portrait of Richard Nixon",
      title: "President of the United States",
      page_url: "https://en.wikipedia.org/wiki/Richard_Nixon",
      title_time: "January 20, 1969 - August 9, 1974",
    },
    {
      id: 19,
      name: "Kim Il Sung",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Kim_Il_Sung_Portrait.png",
      image_alt: null,
      title: "General Secretary of the Workers' Party of Korea",
      page_url: "https://en.wikipedia.org/wiki/Kim_Il_Sung",
      title_time: "12 October 1966 - 8 July 1994",
    },
    {
      id: 20,
      name: "Winston Churchill",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sir_Winston_Churchill_-_19086236948.jpg",
      image_alt:
        "Churchill, 67, wearing a suit, standing and holding into the back of a chair",
      title: "Prime Minister of the United Kingdom",
      page_url: "https://en.wikipedia.org/wiki/Winston_Churchill",
      title_time: "10 May 1940 - 26 July 1945",
    },
    {
      id: 21,
      name: "Thomas Jefferson",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/b/b1/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg",
      image_alt:
        "Portrait of Jefferson in his late 50s with a full head of hair",
      title: "President of the United States",
      page_url: "https://en.wikipedia.org/wiki/Thomas_Jefferson",
      title_time: "March 4, 1801 - March 4, 1809",
    },
    {
      id: 22,
      name: "Sir Seretse Khama",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sir_seretse_khama.png/220px-Sir_seretse_khama.png",
      image_alt: null,
      title: "President of Botswana",
      page_url: "https://en.wikipedia.org/wiki/Seretse_Khama",
      title_time: "30 September 1966 - 13 July 1980",
    },
    {
      id: 23,
      name: "Robert Mugabe",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Mugabe_1979_a.jpg",
      image_alt: "Photograph of Robert Mugabe",
      title: "President of Zimbabwe",
      page_url: "https://en.wikipedia.org/wiki/Robert_Mugabe",
      title_time: "31 December 1987 - 21 November 2017",
    },
    {
      id: 24,
      name: "Woodrow Wilson",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/Thomas_Woodrow_Wilson%2C_Harris_%26_Ewing_bw_photo_portrait%2C_1919_%28cropped%29.jpg",
      image_alt: null,
      title: "President of the United States",
      page_url: "https://en.wikipedia.org/wiki/Woodrow_Wilson",
      title_time: "March 4, 1913 - March 4, 1921",
    },
    {
      id: 25,
      name: "Che Guevara",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/5/58/CheHigh.jpg",
      image_alt: null,
      title: "Council of Ministers (Cuba)",
      page_url: "https://en.wikipedia.org/wiki/Che_Guevara",
      title_time: "11 February 1961 - 1 April 1965",
    },
    {
      id: 26,
      name: "Harry Truman",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/TRUMAN_58-766-06_%28cropped%29.jpg",
      image_alt:
        "Official portrait of Harry S. Truman as president of the United States",
      title: "President of the United States",
      page_url: "https://en.wikipedia.org/wiki/Harry_S._Truman",
      title_time: "April 12, 1945 - January 20, 1953",
    },
    {
      id: 27,
      name: "Simon Bolivar",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/38/Sim%C3%B3n_Bol%C3%ADvar._Toro_Moreno%2C_Jos%C3%A9._1922%2C_Legislative_Palace%2C_La_Paz.png",
      image_alt: null,
      title: "President of Colombia",
      page_url: "https://en.wikipedia.org/wiki/Sim%C3%B3n_Bol%C3%ADvar",
      title_time: "16 February 1819 - 27 April 1830",
    },
    {
      id: 28,
      name: "Ismail Enver Pasha",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/Enver_Pasha_1911.jpg",
      image_alt: null,
      title: "Minister of War",
      page_url: "https://en.wikipedia.org/wiki/Enver_Pasha",
      title_time: "3 January 1914 - 13 October 1918",
    },
    {
      id: 29,
      name: "Adolf Hilter",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Hitler_portrait_crop.jpg",
      image_alt: "Portrait of Adolf Hitler, 1938",
      title: "Führer of Germany",
      page_url: "https://en.wikipedia.org/wiki/Adolf_Hitler",
      title_time: "2 August 1934 - 30 April 1945",
    },
    {
      id: 30,
      name: "Napoleon Bonaparte",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/220px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
      image_alt: null,
      title: "Emperor of the French",
      page_url: "https://en.wikipedia.org/wiki/Napoleon",
      title_time: "18 May 1804 - 6 April 1814",
    },
    {
      id: 31,
      name: "Josip Tito",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Josip_Broz_Tito_uniform_portrait.jpg/220px-Josip_Broz_Tito_uniform_portrait.jpg",
      image_alt: null,
      title: "President of Yugoslavia",
      page_url: "https://en.wikipedia.org/wiki/Josip_Broz_Tito",
      title_time: "14 January 1953 - 4 May 1980",
    },
    {
      id: 32,
      name: "Cleopatra",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kleopatra-VII.-Altes-Museum-Berlin1.jpg",
      image_alt: null,
      title: "Queen of the Ptolemaic Kingdom",
      page_url: "https://en.wikipedia.org/wiki/Cleopatra",
      title_time: "51–30 BC",
    },
    {
      id: 33,
      name: "Genghis Khan",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/35/YuanEmperorAlbumGenghisPortrait.jpg",
      image_alt: null,
      title: "Khagan of the Mongol Empire",
      page_url: "https://en.wikipedia.org/wiki/Genghis_Khan",
      title_time: "Spring 1206 – 25 August 1227",
    },
    {
      id: 34,
      name: "Alexander the Great",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/8/84/Alexander_the_Great_mosaic_%28cropped%29.jpg",
      image_alt: null,
      title: "King of Macedon",
      page_url: "https://en.wikipedia.org/wiki/Alexander_the_Great",
      title_time: "336–323 BC",
    },
    {
      id: 35,
      name: "Tsar Nicholas II",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/8/8f/Mikola_II_%28cropped%29-2.jpg",
      image_alt: null,
      title: "Emperor of Russia",
      page_url: "https://en.wikipedia.org/wiki/Nicholas_II_of_Russia",
      title_time: "1 November 1894 – 15 March 1917",
    },
    {
      id: 36,
      name: "Catherine the Great",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/f/f1/Catherine_II_by_J.B.Lampi_%281780s%2C_Kunsthistorisches_Museum%29.jpg",
      image_alt: "Empress Catherine II",
      title: "Empress of Russia",
      page_url: "https://en.wikipedia.org/wiki/Catherine_the_Great",
      title_time: "9 July 1762 – 17 November 1796",
    },
    {
      id: 37,
      name: "Attila the Hun",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/e/e5/Attila_%28K%C3%A9pes_kr%C3%B3nika%29.jpg",
      image_alt:
        "Gold depiction of a bearded king with a crown on his head, a sabre in his right hand and an orb in his left hand within a blue circle",
      title: "King and chieftain of the Hunnic Empire",
      page_url: "https://en.wikipedia.org/wiki/Attila",
      title_time: "434–453",
    },
    {
      id: 38,
      name: "14th Dalai Lama",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/30/Dalai_Lama_in_2012_02.jpg",
      image_alt: "Tenzin Gyatso speaking",
      title: "Dalai Lama",
      page_url: "https://en.wikipedia.org/wiki/14th_Dalai_Lama",
      title_time: "22 February 1940 – present",
    },
    {
      id: 39,
      name: "King Arthur",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/5/54/Arth_tapestry2.jpg",
      image_alt: null,
      title: "legendary king of Britain",
      page_url: "https://en.wikipedia.org/wiki/King_Arthur",
      title_time: "late 5th or early 6th century",
    },
    {
      id: 40,
      name: "Emperor Hirohito",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hirohito_in_dress_uniform.jpg/800px-Hirohito_in_dress_uniform.jpg",
      image_alt: null,
      title: "Emperor of Japan",
      page_url: "https://en.wikipedia.org/wiki/Hirohito",
      title_time: "25 December 1926 - 7 January 1989",
    },
    {
      id: 41,
      name: "Queen Victoria",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Queen_Victoria_by_Bassano.jpg/220px-Queen_Victoria_by_Bassano.jpg",
      image_alt: null,
      title: "Queen of the United Kingdom",
      page_url: "https://en.wikipedia.org/wiki/Queen_Victoria",
      title_time: "20 June 1837 – 22 January 1901",
    },
    {
      id: 42,
      name: "Vlad the Impaler",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/a/af/Vlad_Tepes_002.jpg",
      image_alt: null,
      title: "Voivode of Wallachia",
      page_url: "https://en.wikipedia.org/wiki/Vlad_the_Impaler",
      title_time: "October – November 1448",
    },
    {
      id: 43,
      name: "Qin Shi Huang",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/QinShiHuang19century.jpg",
      image_alt: null,
      title: "Emperor of the Qin dynasty",
      page_url: "https://en.wikipedia.org/wiki/Qin_Shi_Huang",
      title_time: "221 BC – 12 July 210 BC",
    },
    {
      id: 44,
      name: "Constantine the Great",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Statua_di_Costantino_ai_musei_capitolini.jpg",
      image_alt: "Head statue of Constantine the Great",
      title: "Roman Emperor",
      page_url: "https://en.wikipedia.org/wiki/Constantine_the_Great",
      title_time: "25 July 306 – 22 May 337",
    },
    {
      id: 45,
      name: "Charlemagne",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/f/fb/Charlemagne_denier_Mayence_812_814.jpg",
      image_alt: null,
      title: "King of the Franks",
      page_url: "https://en.wikipedia.org/wiki/Charlemagne",
      title_time: "9 October 768 – 28 January 814",
    },
    {
      id: 46,
      name: "Cyrus the Great",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Cyrus_II_%28The_Great%29.jpg",
      image_alt: null,
      title: "King of Kings",
      page_url: "https://en.wikipedia.org/wiki/Cyrus_the_Great",
      title_time: "550–530 BC",
    },
    {
      id: 47,
      name: "Queen Elizabeth I of England",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/a/af/Darnley_stage_3.jpg",
      image_alt:
        "Full-length portrait of Queen Elizabeth in her early 40s. She has red hair, fair skin, and wears a crown and a pearl necklace.",
      title: "Queen of England and Ireland",
      page_url: "https://en.wikipedia.org/wiki/Elizabeth_I",
      title_time: "17 November 1558 – 24 March 1603",
    },
    {
      id: 48,
      name: "Caesar Augustus",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Augustus_of_Prima_Porta_%28inv._2290%29.jpg",
      image_alt: "Statue of Augustus",
      title: "First Roman Emperor",
      page_url: "https://en.wikipedia.org/wiki/Augustus",
      title_time: "16 January 27 BC – 19 August AD 14",
    },
    {
      id: 49,
      name: "Elizabeth II",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Queen_Victoria_by_Bassano.jpg/220px-Queen_Victoria_by_Bassano.jpg",
      image_alt: null,
      title: "Queen of the United Kingdom",
      page_url: "https://en.wikipedia.org/wiki/Elizabeth_II",
      title_time: "6 February 1952 – 8 September 2022",
    },
    {
      id: 50,
      name: "Henry VIII of England",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/After_Hans_Holbein_the_Younger_-_Portrait_of_Henry_VIII_-_Google_Art_Project.jpg/220px-After_Hans_Holbein_the_Younger_-_Portrait_of_Henry_VIII_-_Google_Art_Project.jpg",
      image_alt: null,
      title: "King of England",
      page_url: "https://en.wikipedia.org/wiki/Henry_VIII",
      title_time: "22 April 1509 – 28 January 1547",
    },
    {
      id: 51,
      name: "Kaiser Wilhelm II",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kaiser_Wilhelm_II_of_Germany_-_1902.jpg/220px-Kaiser_Wilhelm_II_of_Germany_-_1902.jpg",
      image_alt: null,
      title: "German Emperor King of Prussia",
      page_url: "https://en.wikipedia.org/wiki/Wilhelm_II,_German_Emperor",
      title_time: "15 June 1888 – 9 November 1918",
    },
    {
      id: 52,
      name: "Suleiman I of the Ottoman Empire",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/EmperorSuleiman.jpg/220px-EmperorSuleiman.jpg",
      image_alt:
        "Full-length portrait of Queen Elizabeth in her early 40s. She has red hair, fair skin, and wears a crown and a pearl necklace.",
      title: "Sultan of the Ottoman Empire",
      page_url: "https://en.wikipedia.org/wiki/Elizabeth_I",
      title_time: "\t30 September 1520 – 6 September 1566",
    },
    {
      id: 53,
      name: "Louis XIV",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Louis_XIV_of_France.jpg",
      image_alt: "Portrait of Louis XIV aged 63",
      title: "King of France",
      page_url: "https://en.wikipedia.org/wiki/Louis_XIV",
      title_time: "14 May 1643 – 1 September 1715",
    },
    {
      id: 54,
      name: " William the Conqueror",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/William_the_Conqueror_%28TFA%29.jpg",
      image_alt: null,
      title: "First Norman king of England",
      page_url: "https://en.wikipedia.org/wiki/William_the_Conqueror",
      title_time: "25 December 1066 – 9 September 1087",
    },
    {
      id: 55,
      name: "Nikola Tesla",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg",
      image_alt:
        "Head-and-shoulder photograph of a slender man with dark hair and moustache, dark suit and white-collar shirt",
      title:
        " inventor, electrical engineer, mechanical engineer, and futurist",
      page_url: "https://en.wikipedia.org/wiki/Nikola_Tesla",
      title_time: null,
    },
    {
      id: 56,
      name: "Christopher Columbus",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg",
      image_alt: null,
      title: "1st Governor of the Indies",
      page_url: "https://en.wikipedia.org/wiki/Christopher_Columbus",
      title_time: "1492–1499",
    },
    {
      id: 57,
      name: "Socrates",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/b/bc/Socrate_du_Louvre.jpg",
      image_alt: "A marble head of Socrates",
      title: " Greek philosopher",
      page_url: "https://en.wikipedia.org/wiki/Socrates",
      title_time: null,
    },
    {
      id: 58,
      name: "Thomas Edison",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Thomas_Edison2.jpg",
      image_alt: null,
      title: "American inventor and businessman",
      page_url: "https://en.wikipedia.org/wiki/Thomas_Edison",
      title_time: null,
    },
    {
      id: 59,
      name: "William Shakespeare",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/William_Shakespeare_by_John_Taylor.jpg",
      image_alt: null,
      title: "English playwright, poet and actor",
      page_url: "https://en.wikipedia.org/wiki/William_Shakespeare",
      title_time: null,
    },
    {
      id: 60,
      name: "Albert Einstein",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      image_alt: null,
      title: " theoretical physicist",
      page_url: "https://en.wikipedia.org/wiki/Albert_Einstein",
      title_time: null,
    },
    {
      id: 61,
      name: "Robert Oppenheimer",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Oppenheimer_%28cropped%29.jpg/800px-Oppenheimer_%28cropped%29.jpg",
      image_alt: null,
      title: "Father of the atomic bomb",
      page_url: "https://en.wikipedia.org/wiki/J._Robert_Oppenheimer",
      title_time: null,
    },
    {
      id: 62,
      name: "Gavrilo Princep",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gavrilo_Princip%2C_cell%2C_headshot%2C_bw.jpg/220px-Gavrilo_Princip%2C_cell%2C_headshot%2C_bw.jpg",
      image_alt: null,
      title: "Bosnian Serb student who assassinated Archduke Franz Ferdinand",
      page_url: "https://en.wikipedia.org/wiki/Gavrilo_Princip",
      title_time: null,
    },
    {
      id: 63,
      name: "Leonardo da Vinci",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/220px-Francesco_Melzi_-_Portrait_of_Leonardo.png",
      image_alt: null,
      title:
        "painter, draughtsman, engineer, scientist, theorist, sculptor, and architect.",
      page_url: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
      title_time: null,
    },
    {
      id: 64,
      name: "Charles Darwin",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/220px-Charles_Darwin_seated_crop.jpg",
      image_alt: null,
      title: "English naturalist, geologist, and biologist",
      page_url: "https://en.wikipedia.org/wiki/Charles_Darwin",
      title_time: null,
    },
    {
      id: 65,
      name: "Osama bin Laden",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/Osama_bin_Laden_portrait.jpg",
      image_alt: null,
      title: "1st General Emir of al-Qaeda",
      page_url: "https://en.wikipedia.org/wiki/Osama_bin_Laden",
      title_time: "11 August 1988 – 2 May 2011",
    },
    {
      id: 66,
      name: "Karl Marx",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/Karl_Marx_001.jpg",
      image_alt: null,
      title: "1848 pamphlet The Communist Manifesto (with Friedrich Engels)",
      page_url: "https://en.wikipedia.org/wiki/Karl_Marx",
      title_time: null,
    },
    {
      id: 67,
      name: "Mahatma Gandhi",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg",
      image_alt: null,
      title: " anti-colonial nationalist and political ethicist",
      page_url: "https://en.wikipedia.org/wiki/Mahatma_Gandhi",
      title_time: null,
    },
    {
      id: 68,
      name: "Aristotle",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
      image_alt: null,
      title: "Ancient Greek philosopher and polymath",
      page_url: "https://en.wikipedia.org/wiki/Aristotle",
      title_time: null,
    },
    {
      id: 69,
      name: "Muhammad Ali",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Muhammad_Ali_NYWTS.jpg",
      image_alt: null,
      title: "American professional boxer and activist",
      page_url: "https://en.wikipedia.org/wiki/Muhammad_Ali",
      title_time: null,
    },
    {
      id: 70,
      name: "Mother Teresa",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mother_Teresa_1.jpg",
      image_alt: null,
      title: "Founder of the Missionaries of Charity",
      page_url: "https://en.wikipedia.org/wiki/Mother_Teresa",
      title_time: null,
    },
    {
      id: 71,
      name: "Martin Luther King",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg",
      image_alt: "Portrait of King wearing a suit",
      title: "1st President of the Southern Christian Leadership Conference",
      page_url: "https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.",
      title_time: "January 10, 1957 – April 4, 1968",
    },
    {
      id: 72,
      name: "Charles Dickens",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/a/aa/Dickens_Gurney_head.jpg",
      image_alt: "Charles Dickens",
      title: "Greatest novelist of the Victorian era",
      page_url: "https://en.wikipedia.org/wiki/Charles_Dickens",
      title_time: null,
    },
    {
      id: 73,
      name: "Pope John Paul II",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/Ritratto_di_papa_Giovanni_Paolo_II_%281984_%E2%80%93_edited%29.jpg",
      image_alt: null,
      title: "Bishop of Rome",
      page_url: "https://en.wikipedia.org/wiki/Pope_John_Paul_II",
      title_time: "16 October 1978 – 2 April 2005",
    },
    {
      id: 74,
      name: "Louis Pasteur",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Louis_Pasteur%2C_foto_av_Paul_Nadar%2C_Crisco_edit.jpg/220px-Louis_Pasteur%2C_foto_av_Paul_Nadar%2C_Crisco_edit.jpg",
      image_alt: null,
      title:
        "Known for\tGerm theory of disease, Rabies vaccine, Cholera vaccine, Anthrax vaccines, Pasteurization",
      page_url: "https://en.wikipedia.org/wiki/Louis_Pasteur",
      title_time: null,
    },
    {
      id: 75,
      name: "Walt Disney",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.JPG",
      image_alt: null,
      title: "American animator, film producer, and entrepreneur",
      page_url: "https://en.wikipedia.org/wiki/Walt_Disney",
      title_time: null,
    },
    {
      id: 76,
      name: " Michael Jackson",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Michael_Jackson_in_1988.jpg",
      image_alt: "A photograph of Michael Jackson singing into a microphone",
      title: "King of Pop",
      page_url: "https://en.wikipedia.org/wiki/Michael_Jackson",
      title_time: null,
    },
    {
      id: 77,
      name: "Elvis Presley",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Elvis_Presley_promoting_Jailhouse_Rock.jpg",
      image_alt: "Elvis Presley in Jailhouse Rock (1957)",
      title: "King of Rock and Roll",
      page_url: "https://en.wikipedia.org/wiki/Elvis_Presley",
      title_time: null,
    },
    {
      id: 78,
      name: "Plato",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg",
      image_alt: null,
      title: "Ancient Greek philosopher",
      page_url: "https://en.wikipedia.org/wiki/Plato",
      title_time: null,
    },
    {
      id: 79,
      name: "Frederick Douglass",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/c5/Frederick_Douglass_%28circa_1879%29.jpg",
      image_alt: null,
      title: "United States Minister Resident to Haiti",
      page_url: "https://en.wikipedia.org/wiki/Frederick_Douglass",
      title_time: "November 14, 1889 – July 30, 1891",
    },
    {
      id: 80,
      name: "John Lennon",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg",
      image_alt: null,
      title:
        "Founder, co-songwriter, co-lead vocalist and rhythm guitarist of the Beatles",
      page_url: "https://en.wikipedia.org/wiki/John_Lennon",
      title_time: null,
    },
    {
      id: 81,
      name: "Charlie Chaplin",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Charlie_Chaplin_portrait.jpg",
      image_alt: null,
      title: "English comic actor, filmmaker, and composer",
      page_url: "https://en.wikipedia.org/wiki/Charlie_Chaplin",
      title_time: null,
    },
    {
      id: 82,
      name: "Malcolm X",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/6/69/Malcolm_X_NYWTS_2.jpg",
      image_alt: "Photograph of Malcolm X smiling and wearing a suit",
      title: " American Muslim minister and human rights activist",
      page_url: "https://en.wikipedia.org/wiki/Malcolm_X",
      title_time: null,
    },
    {
      id: 83,
      name: "Martin Luther",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/9/90/Lucas_Cranach_d.%C3%84._-_Martin_Luther%2C_1528_%28Veste_Coburg%29.jpg",
      image_alt: null,
      title:
        "German priest, theologian, author, hymnwriter, professor, and Augustinian friar",
      page_url: "https://en.wikipedia.org/wiki/Martin_Luther",
      title_time: null,
    },
    {
      id: 84,
      name: "Galileo Galilei",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Galileo_Galilei_%281564-1642%29_RMG_BHC2700.tiff/lossy-page1-220px-Galileo_Galilei_%281564-1642%29_RMG_BHC2700.tiff.jpg",
      image_alt: null,
      title: "Italian astronomer, physicist and engineer",
      page_url: "https://en.wikipedia.org/wiki/Galileo_Galilei",
      title_time: null,
    },
    {
      id: 85,
      name: "Grigori Rasputin",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/7/71/Rasputin_PA.jpg",
      image_alt: null,
      title: "Russian mystic and holy man",
      page_url: "https://en.wikipedia.org/wiki/Grigori_Rasputin",
      title_time: null,
    },
    {
      id: 86,
      name: "Henry Ford",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Henry_ford_1919.jpg",
      image_alt: null,
      title: "Founder of Ford Motor Company",
      page_url: "https://en.wikipedia.org/wiki/Henry_Ford",
      title_time: null,
    },
    {
      id: 87,
      name: "Bob Ross",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Bob_at_Easel.jpg/220px-Bob_at_Easel.jpg",
      image_alt:
        "Bob Ross painting a landscape on an easel. The picture includes trees, a river, a mountain, and clouds.",
      title: "American painter, art instructor, and television host",
      page_url: "https://en.wikipedia.org/wiki/Bob_Ross",
      title_time: null,
    },
    {
      id: 88,
      name: "Rosa Parks",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/c4/Rosaparks.jpg",
      image_alt: null,
      title: " American activist in the civil rights movement",
      page_url: "https://en.wikipedia.org/wiki/Rosa_Parks",
      title_time: null,
    },
    {
      id: 89,
      name: "Pablo Picasso",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Portrait_de_Picasso%2C_1908.jpg",
      image_alt: "Black-and-white photo of Picasso in a coat",
      title:
        "Spanish painter, sculptor, printmaker, ceramicist and theatre designer",
      page_url: "https://en.wikipedia.org/wiki/Pablo_Picasso",
      title_time: null,
    },
    {
      id: 90,
      name: "Sun Tzu",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/%E5%90%B4%E5%8F%B8%E9%A9%AC%E5%AD%99%E6%AD%A6.jpg",
      image_alt: "A statue of Sun Tzu",
      title:
        " was a Chinese military general, strategist, philosopher, and writer",
      page_url: "https://en.wikipedia.org/wiki/Sun_Tzu",
      title_time: null,
    },
    {
      id: 91,
      name: "Steve Irwin",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Steve_Irwin.jpg",
      image_alt: null,
      title: "The Crocodile Hunter",
      page_url: "https://en.wikipedia.org/wiki/Steve_Irwin",
      title_time: null,
    },
    {
      id: 92,
      name: "Zhang Zongchang",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/a/a1/Zhang_Chongchan.jpg",
      image_alt: null,
      title: "Chinese warlord",
      page_url: "https://en.wikipedia.org/wiki/Zhang_Zongchang",
      title_time: null,
    },
    {
      id: 93,
      name: "Steve Jobs",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
      image_alt: null,
      title: "Co-founder, Chairman and CEO of Apple",
      page_url: "https://en.wikipedia.org/wiki/Steve_Jobs",
      title_time: null,
    },
    {
      id: 94,
      name: "Spartacus",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/e/e9/Tod_des_Spartacus_by_Hermann_Vogel.jpg",
      image_alt: null,
      title: "Thracian gladiator",
      page_url: "https://en.wikipedia.org/wiki/Spartacus",
      title_time: "73–71 BC",
    },
    {
      id: 95,
      name: "Douglas MacArthur",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/9/92/MacArthur_Manila.jpg",
      image_alt: "field marshal",
      title: " General of the Army",
      page_url: "https://en.wikipedia.org/wiki/Douglas_MacArthur",
      title_time: null,
    },
    {
      id: 96,
      name: "Diogenes",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/6/6b/Diogenes-statue-Sinop-enhanced.jpg",
      image_alt: null,
      title: " Greek philosopher and one of the founders of Cynicism",
      page_url: "https://en.wikipedia.org/wiki/Diogenes",
      title_time: null,
    },
    {
      id: 97,
      name: "Alfred Hitchcock",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Hitchcock%2C_Alfred_02.jpg",
      image_alt: null,
      title: "English film director, screenwriter, producer and editor",
      page_url: "https://en.wikipedia.org/wiki/Alfred_Hitchcock",
      title_time: null,
    },
    {
      id: 98,
      name: "Benjamin Franklin",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/8/87/Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg",
      image_alt: null,
      title: "American polymath",
      page_url: "https://en.wikipedia.org/wiki/Benjamin_Franklin",
      title_time: null,
    },
    {
      id: 99,
      name: "Sigmund Freud",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/220px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg",
      image_alt: null,
      title: " Austrian neurologist and the founder of psychoanalysis",
      page_url: "https://en.wikipedia.org/wiki/Sigmund_Freud",
      title_time: null,
    },
    {
      id: 100,
      name: "Robin Williams",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Robin_Williams_Happy_Feet_premiere.jpg/220px-Robin_Williams_Happy_Feet_premiere.jpg",
      image_alt: null,
      title: "American actor and comedian",
      page_url: "https://en.wikipedia.org/wiki/Robin_Williams",
      title_time: null,
    },
  ]);
});
//});
app.use(bodyParser.json());

app.post("/", (req, res) => {
  try {
    const tiers = req.body;

    let ratings = [];
    if (fs.existsSync("ratings.json")) {
      const data = fs.readFileSync("ratings.json", "utf-8");
      ratings = JSON.parse(data);
    }

    // Append the new tiers data to the end of the "ratings" array
    ratings.push(tiers);

    // Write the updated "ratings" array back to the JSON file
    fs.writeFileSync("ratings.json", JSON.stringify(ratings));

    console.log("Success");
    res.send("Rating data received and saved");
  } catch (error) {
    console.log("Error", error);
    res.status(500).send("Error occurred while saving the rating data");
  }
});

app.listen(port, () => {
  console.log(`It's running on ${port}`);
});
