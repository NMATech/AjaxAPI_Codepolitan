const jokes = document.querySelector("#listDadJokes");
const btn_add = document.querySelector("#btn_add");

const addJoke = async () => {
  const jokeText = await getJokes();
  const newLi = document.createElement("li");
  newLi.append(jokeText);
  jokes.append(newLi);
};

const getJokes = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (error) {
    return error;
  }
};

btn_add.addEventListener("click", () => {
  addJoke();
});
