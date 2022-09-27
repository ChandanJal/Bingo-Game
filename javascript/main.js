// Variables
const boxContainer = document.querySelector("[data-box-container]");
const numberContainer = document.querySelector("[data-number-container]");
const numbers = document.querySelectorAll(".number");
const boxes = document.querySelectorAll(".box");

// Initialize
init();

// Events
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (getFilledBoxes().length === 25) {
      box.dataset.state = "checked";
    }
  });
});

// Functions
function init() {
  const nums = getNumberBoxes();
  for (let i = 0; i < nums.length; i++) {
    nums[i].textContent = i + 1;
    nums[i].dataset.key = i + 1;
  }

  numbers.forEach((n) => {
    n.addEventListener("click", () => pressKey(n.dataset.key));
  });
}

function startInteraction() {
  document.addEventListener("keydown", handleKeyPress);
}

function stopInteraction() {
  document.removeEventListener("keydown", handleKeyPress);
}

function randomGenerate() {}

function pressKey(key) {
  const boxes = getFilledBoxes();
  if (boxes.findIndex((v) => v.dataset.letter === key.toLowerCase()) > -1) {
    // already exist
    return;
  }

  const nextBox = boxContainer.querySelector(":not([data-letter])");
  if (nextBox) {
    nextBox.dataset.letter = key.toLowerCase();
    nextBox.textContent = key;
    nextBox.dataset.state = "active";

    numberContainer.removeChild(
      numberContainer.querySelector(`[data-key="${key}"]`)
    );
  }
}

function handleKeyPress(e) {
  if (e.key === "Enter") return console.log("Clicked Enter");

  //   if (e.key === "Backspace") return removeLastElement();

  if (e.key.match(/^\d$/)) return pressKey(e.key);
}

function removeLastElement() {
  const boxes = getFilledBoxes();
  if (boxes.length === 0) return;

  const lastBox = boxes[boxes.length - 1];
  delete lastBox.dataset.letter;
  delete lastBox.dataset.state;
  lastBox.textContent = "";
}

function getFilledBoxes() {
  return Array.from(boxContainer.querySelectorAll("[data-letter]"));
}

function getNumberBoxes() {
  return Array.from(numberContainer.querySelectorAll(".number"));
}

startInteraction();
