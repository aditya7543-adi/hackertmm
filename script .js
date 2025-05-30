// Dynamic Search: Filters mod cards based on user input in real-time
document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const cards = document.getElementsByClassName('card');
  
  Array.from(cards).forEach(function (card) {
    const appTitle = card.querySelector('h3').innerText.toLowerCase();
    card.style.display = appTitle.includes(query) ? "block" : "none";
  });
});