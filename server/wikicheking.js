import wiki from "wikijs";
// const wiki = require('wikijs').default;
console.log("yesss");

wiki()
  .page("Napoleon Bonaparte")
  .then((page) => {
    const imagePromise = page.pageImage();
    const altPromise = page.info("office");
    const urlPromise = page.info();
    const titlePromise = page.info("succession");

    return Promise.all([imagePromise, altPromise, urlPromise, titlePromise]);
  })
  .then(([image, imageAlt, url, title]) => {
    console.log("Image Alt:", imageAlt);
    console.log("URL:", url);
    console.log("Title:", title);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
