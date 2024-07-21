// axios
//   .get("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Menggunakan async await
const getPeople = async (id) => {
  try {
    const data = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(data);
  } catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.response.status);
    console.log(error.response.data);
  }
};
