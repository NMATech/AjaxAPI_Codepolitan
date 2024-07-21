const form = document.querySelector("#searchForm");
const container = document.getElementById("#container");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  document.querySelectorAll("img").forEach((img) => {
    img.remove();
  });

  const keyword = form.elements.query.value;
  const config = {
    params: { q: keyword },
  };

  const req = await axios
    .get("https://api.tvmaze.com/search/shows", config)
    .then((res) => {
      getImages(res.data);
      form.elements.query.value = "";
    })
    .catch((error) => {
      console.log(error);
    });
});

const getImages = (shows) => {
  for (let result of shows) {
    const img = document.createElement("img");
    img.src = result.show.image.medium;
    document.body.append(img);
  }
};
