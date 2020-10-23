function printRandomNumber() {
    // Slumpa ett nummer och skriv ut det på sidan
    const randomNumber = getRandomNumber();
    addNumberToPage(randomNumber);

}

// Helper function 1
function getRandomNumber() {
    const randomNumber = Math.random() * 100
    return Math.round(randomNumber); // ToDo: Implementera att ett slumpässigt tal genereras
}

// Helper function 2
function addNumberToPage(number) {
    console.log(number);

}