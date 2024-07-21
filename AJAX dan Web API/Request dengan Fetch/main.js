fetch("https://swapi.dev/api/people/1")
  .then((res) => {
    if (!res.ok) {
      throw Error("Could't fetch the data for thatt resource");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error", error);
  });

//   Melakukan fetch dua kali
fetch("https://swapi.dev/api/people/2")
  .then((res) => {
    if (!res.ok) {
      throw Error("Could't fetch the data for thatt resource");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
    fetch("https://swapi.dev/api/people/3");
  })
  .then((res) => {
    if (!res.ok) {
      throw Error("Couldn't fetch the data.");
    }

    return res.json();
  })
  .then((data2) => {
    console.log(data2);
  })
  .catch((error) => {
    console.log("Error", error);
  });

//   memanfaatkan async await
const loadData = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/4");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    // Proses kode error
    console.log("error", error);
  }
};
