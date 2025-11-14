// Toggle dark mode
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Handle contact form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent successfully! We'll reach out soon.");
    contactForm.reset();
  });
}

// Handle product search (on home page)
const searchBtn = document.getElementById("searchBtn");
if (searchBtn) {
  searchBtn.addEventListener("click", async () => {
    const query = document.getElementById("searchBox").value;
    const res = await fetch(`/api/search?q=${query}`);
    const data = await res.json();

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (data.length === 0) {
      resultsDiv.innerHTML = "<p>No products found.</p>";
      return;
    }

    data.forEach(p => {
      const card = document.createElement("div");
      card.className = "member";
      card.innerHTML = `
        <h3>${p.name}</h3>
        <p><b>Amazon:</b> ${p.amazon}</p>
        <p><b>Flipkart:</b> ${p.flipkart}</p>
        <p><b>Myntra:</b> ${p.myntra}</p>
      `;
      resultsDiv.appendChild(card);
    });
  });
}
