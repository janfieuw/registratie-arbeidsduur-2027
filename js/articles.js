const articles = [
  {
    title: "Wat zegt Securex over tijdsregistratie vanaf 2027?",
    date: "26 december 2025",
    url: "wat-zegt-securex-over-tijdsregistratie-vanaf-2027.html",
    keywords: "securex tijdsregistratie 2027 arbeidsduurregistratie objectief betrouwbaar toegankelijk"
  },
  {
    title: "Arbeidsduurregistratie en GDPR: waar moet je op letten?",
    date: "19 mei 2025",
    url: "arbeidsduurregistratie-en-gdpr.html",
    keywords: "gdpr privacy gegevens werknemers registratie arbeidsduur"
  },
  {
    title: "Wat zegt UNIZO over de nieuwe wet?",
    date: "16 mei 2025",
    url: "wat-zegt-unizo-over-de-nieuwe-wet.html",
    keywords: "unizo nieuwe wet kmo werkgevers arbeidsduur registratie"
  }
];

function renderArticlesList() {
  const articleContainer = document.getElementById("articles-list");

  if (!articleContainer) return;

  articleContainer.innerHTML = "";

  articles.forEach(article => {
    articleContainer.innerHTML += `
      <a href="${article.url}" class="article-link">
        <span class="article-icon">▤</span>
        <span>
          <span class="article-title">${article.title}</span>
          <span class="article-date">${article.date}</span>
        </span>
      </a>
    `;
  });
}

function setupSearch() {
  const searchInput = document.getElementById("search");
  const searchResults = document.getElementById("search-results");

  if (!searchInput || !searchResults) return;

  searchInput.addEventListener("input", function () {
    const term = this.value.toLowerCase().trim();

    searchResults.innerHTML = "";

    if (term.length < 2) {
      searchResults.style.display = "none";
      return;
    }

    const matches = articles.filter(article =>
      article.title.toLowerCase().includes(term) ||
      article.keywords.toLowerCase().includes(term)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = "<a>Geen resultaten gevonden</a>";
    } else {
      matches.forEach(article => {
        searchResults.innerHTML += `
          <a href="${article.url}">${article.title}</a>
        `;
      });
    }

    searchResults.style.display = "block";
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".search-wrap")) {
      searchResults.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderArticlesList();
  setupSearch();
});