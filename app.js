const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", () => {
  let inputWord = document.querySelector("#userInput").value;
  fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
