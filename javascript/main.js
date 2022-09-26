
const boxContainer = document.querySelector("[data-box-container]");

function startInteraction() {
    document.addEventListener("keydown", handleKeyPress);
}

function pressKey(key) {
    const nextBox = boxContainer.querySelector(":not([data-letter])");
    if (nextBox) {
        nextBox.dataset.letter = key.toLowerCase();
        nextBox.textContent = key;
        nextBox.dataset.state = "active";
    }
}

function handleKeyPress(e) {
    if (e.key.match(/^\d$/)) return pressKey(e.key);
}


startInteraction()