import wiki from "wikijs";
// const wiki = require('wikijs').default;
console.log("yesss");

wiki()
  .page("Pablo Picasso")
  .then((page) => {
    const imagePromise = page.pageImage();
    const altPromise = page.info("alt");
    const reginPromise = page.info("fields");
    const urlPromise = page.info();
    const titlePromise = page.info("knownFor");

    return Promise.all([
      imagePromise,
      altPromise,
      urlPromise,
      titlePromise,
      reginPromise,
    ]);
  })
  .then(([image, imageAlt, url, title, regin]) => {
    console.log("Image Alt:", imageAlt);
    console.log("URL:", url);
    console.log("Title:", title);
    console.log("imageurl", image);
    console.log("regin", regin);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
