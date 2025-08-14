// Example: Rotating welcome messages each time
const messages = [
  "Welcome to Coding Club 🚀",
  "Code. Create. Conquer 💻",
  "Where Ideas Come Alive 💡",
  "Think, Code, Repeat 🔁",
  "Your Future Starts Here 🌟"
];

const textElement = document.querySelector(".animated-text");
textElement.textContent = messages[Math.floor(Math.random() * messages.length)];
