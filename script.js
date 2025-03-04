const firstWords = ["Astral",
                     "Cosmic", 
                     "Crystal", 
                     "Dancing", 
                     "Dark", 
                     "Divine", 
                     "Drop",
                     "Ecstatic", 
                     "Energy", 
                     "Fairy", 
                     "Family", 
                     "Flow", 
                     "Flower", 
                     "Forest", 
                     "Happy", 
                     "Goa", 
                     "God", 
                     "Goddess", 
                     "Gypsy", 
                     "Mystic", 
                     "Magical", 
                     "Moon", 
                     "Mushroom", 
                     "Psy", 
                     "Pyramid", 
                     "Rebel", 
                     "Shadow", 
                     "Shamanic", 
                     "Soul", 
                     "Spirit", 
                     "Star", 
                     "Sun", 
                     "Sunrise", 
                     "Sunset", 
                     "Space", 
                     "Tribal"];

const secondWords = ["Boutique",
                        "Brothers",
                        "Circle", 
                        "Crystal",
                        "Cycle", 
                        "Divine", 
                        "Drop", 
                        "Elements", 
                        "Energy",
                        "Fairy", 
                        "Family", 
                        "Flow", 
                        "Flower", 
                        "Forest", 
                        "Hippie", 
                        "Jungle", 
                        "Lab", 
                        "Light", 
                        "Goa", 
                        "God", 
                        "Goddess", 
                        "Moon", 
                        "Mushroom", 
                        "Pyramid", 
                        "Shadow", 
                        "Sisters", 
                        "Soul", 
                        "Sun", 
                        "Sunrise", 
                        "Sunset", 
                        "Space", 
                        "Spirit", 
                        "Star", 
                        "Tribe", 
                        "Universe", 
                        "Utopia", 
                        "Vibes"];

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

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function startGenerating() {
    document.getElementById("enter-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "flex";
    
    document.getElementById("loader").style.display = "flex";
    document.getElementById("shop-name").style.display = "none";

    setTimeout(() => {
        
        const shopName = `${getRandomItem(firstWords)} ${getRandomItem(secondWords)}`;
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


