const articles = [
    {
    title: "Is HR-integratie een must?",
    date: "14 mei 2026",
    url: "ubook-axoo.html",
    keywords: "Ontdek hoe BookU arbeidsregistratie benadert vanuit planning en HR-processen, en waarom Axoo bewust kiest voor een minimale compliance-aanpak voor KMO’s."
  },
      {
    title: "Verplichte tijdsregistratie vanaf 2027: minder zwart-wit?",
    date: "14 mei 2026",
    url: "tijdsregistratie-minder-zwart-wit.html",
    keywords: "Arbeidsregistratie en flexibiliteit: blijft geven en nemen mogelijk?"
  },
      {
    title: "Tijdsregistratie & flexibiliteit",
    date: "13 mei 2026",
    url: "tijdsregistratie-flexibiliteit.html",
    keywords: "Arbeidsregistratie en flexibiliteit: blijft geven en nemen mogelijk?"
  },

  {
    title: "Aanbieders tijdsregistratie",
    date: "12 mei 2026",
    url: "overzicht-aanbieders-tijdsregistratie.html",
    keywords: "Enkele aanbieders van tijdsregistratie"
  },
    {
    title: "Tijdsregistratie & GDPR",
    date: "12 mei 2026",
    url: "tijdsregistratie-gdpr.html",
    keywords: "Vermijd frictie tussen arbeidsregistratie en GDPR."
  },
    {
    title: "Tijdsregistratie vanaf 2027 - vermijd overkill",
    date: "12 mei 2026",
    url: "tijdsregistratie-overkill.html",
    keywords: "Niet elke onderneming heeft nood aan uitgebreide HR-software."
  },
    {
    title: "Wat zegt Partena Professional over tijdsregistratie vanaf 2027?",
    date: "25 februari 2026",
    url: "wat-zegt-partena-professional-over-tijdsregistratie-vanaf-2027.html",
    keywords: "Partena Professional licht toe wat de resolutie rond verplichte tijdsregistratie vanaf 2027 inhoudt voor Belgische werkgevers."
  },
    {
    title: "Wat zegt Liantis over tijdsregistratie vanaf 2027?",
    date: "12 februari 2026",
    url: "wat-zegt-liantis-over-tijdsregistratie-vanaf-2027.html",
    keywords: "Liantis verduidelijkt waarom arbeidsduurregistratie verplicht wordt vanaf 2027 en welke principes belangrijk zijn voor werkgevers."
  },
    {
    title: "Wat zegt Securex over tijdsregistratie vanaf 2027?",
    date: "16 december 2025",
    url: "wat-zegt-securex-over-tijdsregistratie-vanaf-2027.html",
    keywords: "securex tijdsregistratie 2027 arbeidsduurregistratie objectief betrouwbaar toegankelijk"
  },
  {
    title: "Wat zegt Acerta over tijdsregistratie vanaf 2027?",
    date: "28 november 2025",
    url: "wat-zegt-acerta-over-tijdsregistratie-vanaf-2027.html",
    keywords: "Acerta verduidelijkt waarom tijdsregistratie vanaf 2027 verplicht wordt en welke principes belangrijk zijn voor werkgevers."
  },
  {
    title: "Wat zegt UNIZO over tijdsregistratie vanaf 2027?",
    date: "27 november 2025",
    url: "wat-zegt-unizo-over-tijdsregistratie-vanaf-2027.html",
    keywords: "UNIZO reageert op de plannen rond verplichte tijdsregistratie vanaf 2027 en waarschuwt voor extra administratieve lasten."
  },
   {
    title: "Wat zegt VOKA over tijdsregistratie vanaf 2027?",
    date: "27 november 2025",
    url: "wat-zegt-voka-over-tijdsregistratie-vanaf-2027.html",
    keywords: "VOKA noemt verplichte registratie van arbeidstijd pure kafka en waarschuwt voor extra administratieve druk."
  },
 
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