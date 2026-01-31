// src/index.ts
import { getDestinations, incrementVisit } from './destination';
import type { Destination } from './destination';



document.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const topDestinationsDiv = document.getElementById('topDestinations') as HTMLDivElement;
  const searchBox = document.querySelector('.search-box input') as HTMLInputElement;
  const searchBtn = document.querySelector('.search-box button') as HTMLButtonElement;

  if (!topDestinationsDiv) {
    console.error('No element with id="topDestinations" found!');
    return;
  }

  // display cards
  function displayDestinations(destinations: Destination[]) {
    topDestinationsDiv.innerHTML = '';
    destinations.forEach(d => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${d.name} (${d.municipality})</h3>
        <p>${d.description}</p>
        <p>Visits: ${d.visits}</p>
        ${d.image_url ? `<img src="${d.image_url}" />` : ''}
        <button class="visit-btn">Visit</button>
      `;
      card.querySelector('.visit-btn')?.addEventListener('click', async () => {
        await incrementVisit(d);
        loadDestinations();
      });
      topDestinationsDiv.appendChild(card);
    });
  }

  // fetch and filter destinations
  async function loadDestinations(query = '') {
    let destinations = await getDestinations();
    if (query) {
      query = query.toLowerCase();
      destinations = destinations.filter(d =>
        d.name.toLowerCase().includes(query) ||
        d.municipality.toLowerCase().includes(query)
      );
      destinations.sort((a, b) => b.visits - a.visits);
    }
    displayDestinations(destinations);
  }

  // search button click
  searchBtn.addEventListener('click', () => {
    loadDestinations(searchBox.value);
  });

  // initial load
  loadDestinations();
});