let base_URL = "https://pokeapi.co/api/v2/pokemon/";
function getPokemonList(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
  data
      console.log(data);
      let pokemon = data.results;
      let container = document.querySelector(".pokemon-list-container");
      container.innerHTML = "";
      pokemon.forEach((btn) => {
        container.innerHTML += `<button onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
      });
      container.innerHTML += `<br><br><button  onclick="getPokemonList('${data.next}')">Next</button>`;
     container.innerHTML += `<button  onclick="getPokemonList('${data.previous}')">Prevous</button>`;
    
    });
}
getPokemonList(base_URL);
function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".pokemon-info").innerHTML = `
    <img src="${data.sprites.other["official-artwork"].front_default}">
    <div class="words">
    <p>Name: ${data.name}</p>
    <p>Ability: ${data.abilities[0].ability.name}</p>
    <p>Move: ${data.moves[0].move.name} </p>
    <p>Type: ${data.types[0].type.name}</p>
    <p>ID_no: ${data.id}</p>
    </div>
    `;
    });
}
