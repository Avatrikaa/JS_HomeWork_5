const cardContainer = document.querySelector(".container");
fetch("./db/data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h1>${post.firstname}</h1>
        <h2>${post.job}</h2>
        <p>${post.about}</p>
      `;
      cardContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching data", error);
  });
