const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const searchBtn = document.querySelector("#searchBtn");
const result = document.querySelector(".result");
const header = document.querySelector(".header");

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
        header.innerHTML = data[0].meanings[i].definitions[0].definition;

        let meaning = data[0].meanings[i].definitions[0].definition;
        result.innerHTML = `<div class="word">
        <h1>${inputWord}</h1>
        </div>
        <div class="details">
        <p>${data[0].phonetic || data[0].phonetics[1].text}
        <i class="part-of-speech">${data[0].meanings[i].partOfSpeech}</i></p>
        </div>
        <p class="word-meaning">
        ${meaning}
        // ${data[0].meanings[i].definitions[0].definition}
        </p>
        <p class="word-example">
        ${data[0].meanings[i].definitions[0].example || ""}
        </p>
        <br />`;
      }
      document.querySelector("#userInput").value = "";
    });
});
