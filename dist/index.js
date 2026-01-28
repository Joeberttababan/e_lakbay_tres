// src/index.ts
import { getDestinations, incrementVisit } from './destination';
const searchBox = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');
const topDestinationsDiv = document.getElementById('topDestinations');
function displayDestinations(destinations) {
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
            loadDestinations(); // refresh after increment
        });
        topDestinationsDiv.appendChild(card);
    });
}
async function loadDestinations(query = '') {
    let destinations = await getDestinations();
    if (query) {
        query = query.toLowerCase();
        destinations = destinations.filter(d => d.name.toLowerCase().includes(query) ||
            d.municipality.toLowerCase().includes(query));
        destinations.sort((a, b) => b.visits - a.visits);
    }
    displayDestinations(destinations);
}
searchBtn.addEventListener('click', () => {
    loadDestinations(searchBox.value);
});
// initial load
loadDestinations();
