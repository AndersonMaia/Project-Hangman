const reloadBtn = document.querySelector(".reload");
const headImg = document.querySelector(".head-img");
const bodyImg = document.querySelector(".body-img");
const legLImg = document.querySelector(".leg-l-img");
const legRImg = document.querySelector(".leg-r-img");
const armRImg = document.querySelector(".arm-r-img");
const armLImg = document.querySelector(".arm-l-img");
const word = document.querySelector(".word");
const wordLetters = document.querySelector(".word-letters");
const wordDashes = document.querySelector(".word-dashes");
const dashImg = document.querySelector(".dash-img");
const letters = document.querySelectorAll(".letter");

let chosenWord = "";
let newDash;
let newWordLetter;
let wordLettersArr = [];

randomWord();
constructWord();

reloadBtn.addEventListener("click", reset);

for (let l of letters) {
  l.addEventListener("click", () => {
    for (c of chosenWord) {
      if (c === l.innerText) {
        for (let wordL of wordLettersArr) {
          if (wordL.innerText == c) {
            wordL.classList.add("visible");
            wordL.classList.remove("hidden");
            console.log(wordL);
          }
        }
      } else {
        console.log(c + "  no match");
      }
    }
  });
}

function randomWord() {
  const wordsToChoose = [
    "FUNCTION",
    "ARRAY",
    "STRING",
    "METHOD",
    "PROPERTY",
    "LOOP",
    "BOOLEAN",
    "OBJECT",
    "PARAMETER",
    "ARGUMENT",
    "SCOPE",
  ];

  chosenWord = wordsToChoose[Math.floor(Math.random() * 11)];
}

function constructWord() {
  for (l of chosenWord) {
    newDash = document.createElement("img");
    newDash.classList.add("dash-img");
    newDash.src = "imgs/traço.png";
    newDash.innerHTML = l;
    wordDashes.append(newDash);

    newWordLetter = document.createElement("h1");
    newWordLetter.classList.add("word-letter", "hidden");
    newWordLetter.innerHTML = l;
    wordLetters.append(newWordLetter);
    wordLettersArr.push(newWordLetter);

    console.log(wordLetters);
  }
}

function checkLetter() {
  return "";
}

function reset() {
  location.reload();
}
