// Llista d'articles d'exemple (enllaços externs i imatge principal)
const articles = [
  {
    titol: "Els forats negres i el temps",
    categoria: "Ciència",
    descripcio: "Com la gravetat extrema deforma l'espai i alenteix el pas del temps.",
    enllac: "https://ca.wikipedia.org/wiki/Forat_negre",
    imatge: "https://picsum.photos/seed/espai/600/340",
    color: "#5b4bff"
  },
  {
    titol: "Història del píxel als videojocs",
    categoria: "Cultura",
    descripcio: "De les primeres màquines arcade fins a l'estètica indie moderna.",
    enllac: "https://ca.wikipedia.org/wiki/Pixel_art",
    imatge: "https://picsum.photos/seed/pixel/600/340",
    color: "#ff5c8a"
  },
  {
    titol: "Com funciona la fotosíntesi artificial",
    categoria: "Tecnologia",
    descripcio: "Imitar les plantes per generar energia neta a partir de llum solar.",
    enllac: "https://ca.wikipedia.org/wiki/Fotos%C3%ADntesi_artificial",
    imatge: "https://picsum.photos/seed/solar/600/340",
    color: "#00b894"
  },
  {
    titol: "L'arquitectura de la ciutat de Petra",
    categoria: "Història",
    descripcio: "Enginyeria hidràulica i façanes esculpides directament a la roca.",
    enllac: "https://ca.wikipedia.org/wiki/Petra",
    imatge: "https://picsum.photos/seed/petra/600/340",
    color: "#f59e0b"
  },
  {
    titol: "Per què somiem cada nit?",
    categoria: "Psicologia",
    descripcio: "Teories actuals sobre la memòria, les emocions i la fase REM.",
    enllac: "https://ca.wikipedia.org/wiki/Somni",
    imatge: "https://picsum.photos/seed/somni/600/340",
    color: "#0ea5e9"
  },
  {
    titol: "El llenguatge secret dels boscos",
    categoria: "Natura",
    descripcio: "Com els arbres comparteixen nutrients a través de xarxes de fongs.",
    enllac: "https://ca.wikipedia.org/wiki/Micorriza",
    imatge: "https://picsum.photos/seed/bosc/600/340",
    color: "#10b981"
  }
];

const graella = document.getElementById("graella-articles");
const cercador = document.getElementById("cercador");
const senseResultats = document.getElementById("sense-resultats");

function mostrarArticles(llista) {
  graella.innerHTML = "";

  if (llista.length === 0) {
    senseResultats.classList.remove("amagat");
    return;
  }

  senseResultats.classList.add("amagat");

  llista.forEach(function (article, index) {
    const targeta = document.createElement("article");
    targeta.className = "targeta";
    targeta.style.borderTopColor = article.color;
    targeta.style.animationDelay = `${index * 0.12}s`;

    targeta.innerHTML = `
      <div>
        <img class="imatge-targeta" src="${article.imatge}" alt="${article.titol}">
        <span class="etiqueta" style="background-color: ${article.color}">
          ${article.categoria}
        </span>
        <h3>${article.titol}</h3>
        <p>${article.descripcio}</p>
      </div>
      <a class="boto-llegir" href="${article.enllac}" target="_blank" rel="noopener">
        Llegir article →
      </a>
    `;

    graella.appendChild(targeta);
  });
}

cercador.addEventListener("input", function () {
  const text = cercador.value.toLowerCase().trim();

  const filtrats = articles.filter(function (article) {
    return (
      article.titol.toLowerCase().includes(text) ||
      article.categoria.toLowerCase().includes(text) ||
      article.descripcio.toLowerCase().includes(text)
    );
  });

  mostrarArticles(filtrats);
});

mostrarArticles(articles);