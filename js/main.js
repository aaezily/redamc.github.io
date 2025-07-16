const annunci = [
    {
      id: 1,
      titolo: "📜 Nuovo regolamento staff",
      contenuto: "Il regolamento interno è stato aggiornato. Controlla la sezione #staff-info su Discord per tutti i dettagli.",
      data: "2025-07-15"
    },
    {
      id: 2,
      titolo: "📅 Meeting staff venerdì",
      contenuto: "Venerdì 18 ore 21:00 - riunione staff obbligatoria su Discord.",
      data: "2025-07-13"
    }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("annunci-container");
    if (container) {
      annunci.forEach(annuncio => {
        const col = document.createElement("div");
        col.className = "col-md-6";
        col.innerHTML = `
          <div class="card h-100 p-3">
            <h5 class="card-title">${annuncio.titolo}</h5>
            <p class="text-secondary">${annuncio.data}</p>
            <a href="annuncio.html?id=${annuncio.id}" class="btn btn-outline-light mt-auto">Leggi di più</a>
          </div>`;
        container.appendChild(col);
      });
    }
  
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id) {
      const a = annunci.find(x => x.id == id);
      if (a) {
        document.getElementById("titolo").textContent = a.titolo;
        document.getElementById("data").textContent = a.data;
        document.getElementById("contenuto").innerHTML = `<p>${a.contenuto}</p>`;
      }
    }
  });
  