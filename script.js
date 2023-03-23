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
let dummyParts = [headImg, bodyImg, legLImg, legRImg, armRImg, armLImg];
let clicksCounter = 0;

randomWord();
constructWord();
dummyHandler();

reloadBtn.addEventListener("click", reset);

for (let l of letters) {
  l.disabled = false;

  l.addEventListener("click", () => {
    l.classList.remove("hover");
    l.disabled = true;
    l.style.color = "crimson";
    clicksCounter += 1;

    for (c of chosenWord) {
      if (c === l.innerText) {
        for (let wordL of wordLettersArr) {
          if (wordL.innerText == c) {
            wordL.classList.add("visible");
            wordL.classList.remove("invisible");
            l.style.color = "darkgreen";
            clicksCounter -= 1;
          }
        }
      }
    }

    console.log(clicksCounter);
    dummyHandler();
  });
}

function dummyHandler() {
  if (clicksCounter === 0) {
    for (let part of dummyParts) {
      part.classList.add("invisible");
    }
  } else if (clicksCounter === 1) {
    dummyParts[3].classList.add("visible");
  } else if (clicksCounter === 2) {
    dummyParts[2].classList.add("visible");
  } else if (clicksCounter === 3) {
    dummyParts[1].classList.add("visible");
  } else if (clicksCounter === 4) {
    dummyParts[4].classList.add("visible");
  } else if (clicksCounter === 5) {
    dummyParts[5].classList.add("visible");
  } else if (clicksCounter === 6) {
    dummyParts[0].classList.add("visible");
    alert("You lost!");
  }

  let lettersCorrect = [];
  for (let wordL of wordLettersArr) {
    if (wordL.classList.contains("visible")) {
      lettersCorrect.push(wordL);
    }
  }

  if (lettersCorrect.length === wordLettersArr.length && clicksCounter < 6) {
    alert("You Won!");
  }
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
    newWordLetter.classList.add("word-letter", "invisible");
    newWordLetter.innerHTML = l;
    wordLetters.append(newWordLetter);
    wordLettersArr.push(newWordLetter);

    console.log(wordLetters);
  }
}

function reset() {
  location.reload();
}
