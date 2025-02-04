const messages = [
    "Estás segura?",
    "Muy segura",
    "Realmente segura?",
    "Piensalo mejor, andale",
    "Te compro un pan dulce",
    "Dime que sí, andale",
    "No aplastes aqui o me awito",
    "París se va a poner triste",
    "Miau se va a poner triste",
    "Mira, nomas te digo que contigo nunca me rendiré ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
