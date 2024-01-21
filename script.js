function displayCircles(containerId, count, animalSymbol) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous symbols
    for (let i = 0; i < count; i++) {
        const animal = document.createElement('span');
        animal.className = 'animal-symbol';
        animal.innerText = animalSymbol;
        container.appendChild(animal);
    }
}

function calculateImpact() {
    const yearsInput = document.getElementById('years');
    const yearsVegan = yearsInput.value;
    const errorMessage = document.getElementById('error-message');

    if (!yearsVegan || yearsVegan < 0 || yearsVegan > 100 || !Number.isInteger(Number(yearsVegan))) {
        errorMessage.style.display = 'block';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    const avgChickenWeight = 6 * 0.75; // 75% of 6 pounds
    const avgPigWeight = 250 * 0.74; // 74% of 250 pounds
    const avgCowWeight = 1300 * 0.62; // 62% of 1300 pounds
    const avgFishWeight = 5; // Approximate weight of an average fish

    const chickensPerYear = 98.8 / avgChickenWeight;
    const pigsPerYear = 51.6 / avgPigWeight;
    const cowsPerYear = 58.8 / avgCowWeight;
    const fishPerYear = 20.5 / avgFishWeight;

    updateAnimalCountAndDisplay('chicken', Math.round(yearsVegan * chickensPerYear), '🐔');
    updateAnimalCountAndDisplay('pig', Math.round(yearsVegan * pigsPerYear), '🐖');
    updateAnimalCountAndDisplay('cow', Math.round(yearsVegan * cowsPerYear), '🐄');
    updateAnimalCountAndDisplay('fish', Math.round(yearsVegan * fishPerYear), '🐟');
}

function updateAnimalCountAndDisplay(animal, count, symbol) {
    document.getElementById(animal + 'Count').innerText = count;
    document.getElementById(animal + 'Facts').style.display = 'block';
    displayCircles(animal + 'Circles', count, symbol);
}

function subscribe() {
    const email = document.getElementById('email').value;
    alert('Thank you for subscribing: ' + email);
    // Integrate with backend or email service for actual functionality
}
