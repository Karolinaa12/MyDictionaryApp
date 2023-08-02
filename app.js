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
      <h1>${inputWord}</h1>
      </div>
      <div class="details">
      <p>${data[0].phonetic || data[0].phonetics[1].text}
      <i class="part-of-speech">${data[0].meanings[0].partOfSpeech}</i></p>
      </div>
      <p class="word-meaning">
      ${data[0].meanings[0].definitions[0].definition}
      </p>
      <p class="word-example">
      ${data[0].meanings[0].definitions[0].example || ""}
      </p>
      <br />

      <div class="details1">
      <p>${data[0].phonetic || data[0].phonetics[1].text}
      <i class="part-of-speech">${data[0].meanings[1].partOfSpeech}</i></p>
      </div>
      <p class="word-meaning1">
      ${data[0].meanings[1].definitions[0].definition}
      </p>
      <p class="word-example2">
      ${data[0].meanings[1].definitions[0].example || ""}
      </p>`;
    });
});
