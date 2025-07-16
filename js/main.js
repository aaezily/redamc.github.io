const annunci = [
    {
      id: 1,
      titolo: "Nuovo regolamento",
      contenuto: "Da oggi il regolamento è stato aggiornato. Leggilo con attenzione.",
      data: "2025-07-16"
    },
    {
      id: 2,
      titolo: "Meeting staff venerdì",
      contenuto: "Ricordate il meeting questo venerdì alle 21:00 su Discord.",
      data: "2025-07-14"
    }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("annunci-container");
    if (container) {
      annunci.forEach(annuncio => {
        const card = document.createElement("div");
        card.className = "col-md-6 mb-4";
        card.innerHTML = `
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${annuncio.titolo}</h5>
              <p class="card-text text-muted">${annuncio.data}</p>
              <a href="annuncio.html?id=${annuncio.id}" class="btn btn-primary">Leggi</a>
            </div>
          </div>`;
        container.appendChild(card);
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
  