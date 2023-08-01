const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const searchBtn = document.querySelector("#searchBtn");
const result = document.querySelector(".result");

searchBtn.addEventListener("click", () => {
  let inputWord = document.querySelector("#userInput").value;
  fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `<div class="word">
      <h1>${inputWord}</h1>`;
    });
});
