function calculateImpact() {
    const yearsVegan = document.getElementById('years').value;
    const avgChickenWeight = 6 * 0.75; // 75% of 6 pounds
    const avgPigWeight = 250 * 0.74; // 74% of 250 pounds
    const avgCowWeight = 1300 * 0.62; // 62% of 1300 pounds
    const avgFishWeight = 5; // Approximate weight of an average fish

    const chickensPerYear = 98.8 / avgChickenWeight;
    const pigsPerYear = 51.6 / avgPigWeight;
    const cowsPerYear = 58.8 / avgCowWeight;
    const fishPerYear = 20.5 / avgFishWeight;

    displayCircles('chickenCircles', Math.round(yearsVegan * chickensPerYear));
    displayCircles('pigCircles', Math.round(yearsVegan * pigsPerYear));
    displayCircles('cowCircles', Math.round(yearsVegan * cowsPerYear));
    displayCircles('fishCircles', Math.round(yearsVegan * fishPerYear));
}

function displayCircles(containerId, count) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous circles
    for (let i = 0; i < count; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        container.appendChild(circle);
    }
}

// Optional: Add color to circles based on the animal type
function colorCircles(animalType, circle) {
    switch(animalType) {
        case 'chicken': circle.style.backgroundColor = 'gold'; break;
        case 'pig': circle.style.backgroundColor = 'pink'; break;
        case 'cow': circle.style.backgroundColor = 'skyblue'; break;
        case 'fish': circle.style.backgroundColor = 'lightgreen'; break;
        default: circle.style.backgroundColor = 'gray';
    }
}
