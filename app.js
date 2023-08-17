const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const searchBtn = document.querySelector("#searchBtn");

const header = document.querySelector(".header");
const meaning = document.querySelector(".meaning");

const form = document.querySelector("#searchForm");
const result = document.querySelector("#searchResult");
const sound = document.getElementById("sound");

/* form.addEventListener(`submit`, async function (e) {
  e.preventDefault();
  const searchTerm = form.nextElementSibling.querySelector.value;
  const config = { params: { q: searchTerm} };
  const res = await
}) */

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let inputWord = document.querySelector("#userInput").value;
  fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let meaningsNo = data[0].meanings.length;
      for (let i = 0; i < meaningsNo; i++) {
        console.log(data[0].meanings[i].definitions[0].definition);

        result.innerHTML = `<div class="word">
        <h1>${inputWord}</h1>
        <button onclick="playSound()"><i class="fa-solid fa-volume-high"></i>
        </button>
        </div>
        <div class="details">
        <p>${data[0].phonetic || data[0].phonetics[1].text}
        <i class="part-of-speech">${data[0].meanings[i].partOfSpeech}</i></p>
        </div>
        <p class="word-meaning">
        ${data[0].meanings[i].definitions[0].definition}
        </p>
        <p class="word-example">
        ${data[0].meanings[i].definitions[0].example || ""}
        </p>
        <br />`;
        sound.setAttribute(
          "src",
          `${
            data[0].phonetics[0].audio ||
            data[0].phonetics[1].audio ||
            data[0].phonetics[2].audio
          }`
        );
      }
      document.querySelector("#userInput").value = "";
    });
});
