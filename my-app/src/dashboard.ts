// src/dashboard.ts
import { getDestinations, incrementVisit, Destination } from './destination.js';
import { uploadImage } from './storage.js';

const dashboardFeed = document.getElementById('dashboardFeed') as HTMLDivElement;

// Display destinations with option to increment visits or upload image
async function loadDashboard() {
  const destinations = await getDestinations();
  dashboardFeed.innerHTML = '';

  destinations.forEach(d => {
    const card = document.createElement('div');
    card.className = 'feed-card';
    card.innerHTML = `
      <h4>${d.name} (${d.municipality})</h4>
      <p>Visits: ${d.visits}</p>
      <input type="file" class="image-upload" />
      <button class="visitBtn">Increment Visit</button>
    `;

    card.querySelector('.visitBtn')?.addEventListener('click', async () => {
      await incrementVisit(d);
      loadDashboard();
    });

    const fileInput = card.querySelector('.image-upload') as HTMLInputElement;
    fileInput.addEventListener('change', async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const url = await uploadImage(file);
        if (url) alert('Image uploaded successfully!');
      }
    });

    dashboardFeed.appendChild(card);
  });
}

loadDashboard();
