// Get Pokemon Data from API
axios.get('https://pokeapi.co/api/v2/pokemon')
  .then(response => {
    const pokemonData = response.data.results;
    const pokemonContainer = document.querySelector('section.grid');
    pokemonData.forEach(pokemon => {
      // Create Element for Each Pokemon
      const pokemonEl = document.createElement('div');
      pokemonEl.classList.add('text-center', 'rounded', 'shadow-md', 'bg-white', 'py-4', 'animate__animated', 'animate__fadeInUp');
      pokemonEl.innerHTML = `
        <img class="mx-auto w-40 h-40" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIndexFromUrl(pokemon.url)}.png" alt="${pokemon.name}">
        <h2 class="text-xl mt-4">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      `;
      pokemonContainer.appendChild(pokemonEl);
    });
  })
  .catch(error => {
    console.log(error);
  });

// Helper Function to Get Index from Pokemon URL
function getIndexFromUrl(url) {
  const regex = /\/(\d+)\//;
  return url.match(regex)[1];
}
