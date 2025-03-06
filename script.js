const firstWords = ["Astral", "Cosmic", "Crystal", "Dancing", "Dark", "Divine", "Drop", "Ecstatic", "Energy", "Fairy",
                    "Family", "Flow", "Flower", "Forest", "Fungal", "Galactic", "Galaxy", "Gaia", "God", "Goddess",
                    "Goa", "Green", "Happy", "Herbal", "Infected", "Light", "Lucid", "Lunar", "Magical", "Machine",
                    "Mandala", "Mars", "Mercury", "Mysterious", "Moon", "Mother", "Mystic", "One", "Oracle",
                    "Parvati", "Perfect", "Plasma", "Portal", "Primal", "Psy-", "Pyramid", "Rebel", "Root", "Sacred",
                    "Saturn", "Shadow", "Shakti", "Shamanic", "Shiva", "Sky", "Sol", "Solar", "Soul", "Sound",
                    "Space", "Spirit", "Star", "Static", "Sun", "Sunbeam", "Sunrise", "Sunset", "Surreal",
                    "Synesthetic", "Technology", "Terra", "The", "Tidal", "Titan", "Tribe", "Universe", "Venus",
                    "Void", "Whispering", "White", "X-", "Zen", "Zeus"];

const secondWords = ["Alchemist", "Apollo", "Aum", "Awakening", "Black", "Bliss", "Blue", "Boom", "Boutique",
                        "Brothers", "Child", "Circle", "Crystal", "Cycle", "Dark", "Divine", "Drop", "Dream", "Drip",
                        "Earth", "Echo", "Elements", "Enigma", "Energy", "Eros", "Eternal", "Fairy", "Family", "Flow",
                        "Flower", "Forest", "Fractal", "Frequency", "Gaia", "Garden", "God", "Goddess", "Goa", "Green",
                        "Guide", "Hippie", "Infinity", "Jungle", "Jupiter", "Lab", "Life", "Light", "Machine", "Mandala",
                        "Mars", "Mercury", "Mist", "Moon", "Moonlit", "Mother", "Oracle", "Parvati", "Plasma", "Portal",
                        "Projection", "Pyramid", "Ritual", "Root", "Saturn", "Seeker", "Shadow", "Shakti", "Shiva",
                        "Sisters", "Sky", "Sol", "Solar", "Soul", "Sound", "Space", "Sphere", "Spirit", "Star", "Sun",
                        "Sunbeam", "Sunrise", "Sunset", "Technology", "Terra", "Titan", "Tribe", "Universe", "Utopia",
                        "Venus", "Vibes", "Void", "Vulcan", "White", "Zen", "Zeus"];

const fonts = [
                "Gloock", 
                "Zen Dots", 
                "Bruno Ace S", 
                "Megrim", 
                "Fruktur", 
                "Metal Mania", 
                "Uncial Antiqua", 
                "Eagle Lake", 
                "Trade Winds", 
                "Mystery Quest"];


const words = ["DJ", "festival", "shop", "spirit", "gathering"];
let index = 0;
const wordElement = document.getElementById("changing-word");

function changeWord() {
    wordElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        index = (index + 1) % words.length;
        wordElement.textContent = words[index]; // Change text
        wordElement.style.opacity = 1; // Fade in
    }, 500); // Half a second delay for fade effect
}

setInterval(changeWord, 2000); // Change word every second

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function startGenerating() {
    document.getElementById("enter-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "flex";
    
    document.getElementById("loader").style.display = "flex";
    document.getElementById("shop-name").style.display = "none";

    setTimeout(() => {
        
        let firstW = getRandomItem(firstWords);
        let secondW = getRandomItem(secondWords);

        while (firstW == secondW) {
            secondW = getRandomItem(secondWords);
        }

        let shopName = firstW + ' ' + secondW;

        if (firstW.indexOf('-') > -1) {
            shopName = firstW + secondW;
        }
        /*
        const shopName = `${getRandomItem(firstWords)} ${getRandomItem(secondWords)}`;
        */

        const randomFont = getRandomItem(fonts);
        const nameElement = document.querySelector(".shop-name");

        nameElement.textContent = shopName;
        nameElement.style.fontFamily = randomFont;

        document.getElementById("loader").style.display = "none";
        document.getElementById("shop-name").style.display = "flex";

    }, 1000);
}

function createFloatingDots() {
    const floatingDotsContainer = document.querySelector('.floating-dots');
    const numDots = 150; // Increased number of dots for more density

    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('span');
        
        // Randomize dot properties
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        
        // Vary dot size more dynamically
        const size = Math.random() * 3 + 1; // Between 1-4 pixels
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        
        // Randomize opacity
        dot.style.opacity = Math.random() * 0.7 + 0.3; // Between 0.3 and 1
        
        // Randomize animation duration
        const animationDuration = Math.random() * 10 + 8; // Between 8-18 seconds
        dot.style.animationDuration = `${animationDuration}s`;
        
        // Add animation delay for more natural look
        const animationDelay = Math.random() * 5; // Between 0-5 seconds
        dot.style.animationDelay = `-${animationDelay}s`;
        
        floatingDotsContainer.appendChild(dot);
    }
}


function showAbout() {
    document.getElementById("about-screen").style.display = "flex";
}

function closeAbout() {
    document.getElementById("about-screen").style.display = "none";
}

// Initialize floating dots when page loads
window.addEventListener('DOMContentLoaded', createFloatingDots);


