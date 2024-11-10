// Array of famous quotes
const quotes = [
    "Do or do not. There is no try. – Yoda, Star Wars",
    "With great power comes great responsibility. – Uncle Ben, Spider-Man",
    "The flower that blooms in adversity is the most rare and beautiful of all. – The Emperor, Mulan",
    "Why do we fall, sir? So that we can learn to pick ourselves up. – Alfred, Batman Begins",
    "Life opens up opportunities to you, and you either take them or you stay afraid of taking them. – Jim Carrey",
    "It’s not who I am underneath, but what I do that defines me. – Batman, Batman Begins",
    "I am Iron Man. – Tony Stark, Iron Man (A reminder to embrace who you are)",
    "Sometimes it is the people who no one imagines anything of who do the things that no one can imagine. – Alan Turing, The Imitation Game",
    "Just keep swimming. – Dory, Finding Nemo",
    "Happiness can be found even in the darkest of times, if one only remembers to turn on the light. – Albus Dumbledore, Harry Potter"
];

// Function to generate a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    alert(randomQuote); // Show the quote in an alert box
}

// Event listener for button click
document.getElementById("quoteButton").addEventListener("click", showRandomQuote);
