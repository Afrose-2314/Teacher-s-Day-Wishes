// Teachers' Day quotes (non-repeating until all shown)
const quotes = [
  "Happy Teachers' Day! You inspire, motivate, and guide us every day.",
  "To the best teacher, Happy Teachers' Day!",
  "Your guidance lights the path of our success. Happy Teachers' Day!",
  "Teaching is the one profession that creates all other professions.",
  "You don't just teach, you inspire. Happy Teachers' Day!",
  "A teacher's impact lasts a lifetime. Thank you!",
  "Behind every successful student is a great teacher.",
  "Your lessons go beyond books. Happy Teachers' Day!",
  "Teachers plant the seeds of knowledge that grow forever.",
  "The world needs more teachers like you."
];

let usedQuotes = [];

// Show a random non-repeating quote
function showQuote() {
  if (usedQuotes.length === quotes.length) {
    usedQuotes = []; // reset after all shown
  }
  let available = quotes.filter(q => !usedQuotes.includes(q));
  let randomQuote = available[Math.floor(Math.random() * available.length)];
  usedQuotes.push(randomQuote);
  document.getElementById("quote").textContent = randomQuote;
}

// Login system with localStorage
function login() {
  const username = document.getElementById("username").value.trim();
  if (!username) {
    alert("Please enter your name!");
    return;
  }

  let savedUser = localStorage.getItem("username");
  if (savedUser && savedUser !== username) {
    alert("You are already logged in as " + savedUser);
    return;
  }

  localStorage.setItem("username", username);

  document.getElementById("login-section").classList.add("hidden");
  document.getElementById("quotes-section").classList.remove("hidden");

  showQuote();
  setInterval(showQuote, 5000); // change quote every 5s
}

// Auto-login if already stored
window.onload = () => {
  let savedUser = localStorage.getItem("username");
  if (savedUser) {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("quotes-section").classList.remove("hidden");
    showQuote();
    setInterval(showQuote, 5000);
  }
};
