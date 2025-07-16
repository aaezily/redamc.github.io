const annunci = [
    {
      id: 1,
      titolo: "📜 Nuovo regolamento staff",
      contenuto: "Abbiamo aggiornato il regolamento. Controlla la sezione dedicata per i dettagli.",
      data: "2025-07-15"
    },
    {
      id: 2,
      titolo: "📅 Meeting staff venerdì",
      contenuto: "Riunione obbligatoria su Discord alle 21:00.",
      data: "2025-07-13"
    }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("annunci-container");
    if (container) {
      annunci.forEach(a => {
        const div = document.createElement("div");
        div.className = "card-annuncio";
        div.innerHTML = `
          <h5>${a.titolo}</h5>
          <p class="text-secondary">${a.data}</p>
          <a href="annuncio.html?id=${a.id}" class="btn btn-outline-light btn-sm">Leggi</a>
        `;
        container.appendChild(div);
      });
    }
  });
  