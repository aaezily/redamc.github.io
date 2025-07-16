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
    // Attiva animazioni body
    document.body.classList.add('loaded');
  
    const container = document.getElementById("annunci-container");
    if (container) {
      annunci.forEach((a, i) => {
        const div = document.createElement("div");
        div.className = "card-annuncio";
        div.style.animationDelay = `${i * 0.1}s`; // Stagger animazioni
        div.innerHTML = `
          <h5>${a.titolo}</h5>
          <p class="text-secondary">${a.data}</p>
          <button class="btn btn-outline-light btn-sm" onclick="openAnnuncio(${a.id})">Leggi</button>
        `;
        container.appendChild(div);
      });
    }
  });
  
  // Funzione apertura annuncio con toast
  function openAnnuncio(id) {
    showToast("🔔 Annuncio aperto!");
    setTimeout(() => {
      window.location.href = `annuncio.html?id=${id}`;
    }, 800); // Delay per mostrare il toast
  }
  
  // Toast Bootstrap dinamico
  function showToast(msg) {
    const toastEl = document.getElementById("toastNotifica");
    const toastBody = document.getElementById("toastBody");
    toastBody.textContent = msg;
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
  