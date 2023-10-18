import wiki from "wikijs";
// const wiki = require('wikijs').default;
console.log("yesss");

wiki()
  .page("Leopold II of Belgium")
  .then((page) => {
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
  })
  .catch((error) => {
    console.error("Error:", error);
  });
