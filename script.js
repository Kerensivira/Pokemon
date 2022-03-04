
// Variable de la API.

 const urlAPIpokemon = 'https://pokeapi.co/api/v2/pokemon/';

 //Variables HTML.

const form = document.getElementById('form');
const search = document.getElementById('search');
 const submit = document.getElementById('submit');
 const main = document.getElementById('main');

//Promesas usando fetch y await para consumir la API

const getPokemons = async (url,id) => {
    const res = await fetch (url + id)
    const data = await res.json()
    console.log(data);
    CrearPokemons(data);

}

// Hice un ciclo for para traer 52 tarjetas de pokemons.

 function TraerPokemones (number) {

    for (let i = 1; i <= number; i++) {
       
        getPokemons(urlAPIpokemon, i) 
        
    }
 }

 TraerPokemones(52);

 //En un function guardé los datos que quería mostrar en pantalla.

function CrearPokemons(pokemon) {
    
const pokeDiv = document.createElement('div');
const pokename = document.createElement('div');
const sprite = document.createElement('img')
const habilidad = document.createElement('div');
const move = document.createElement('div');

move.textContent = pokemon.moves[0].move.name;
habilidad.textContent = pokemon.abilities[0].ability.name;
sprite.src = pokemon.sprites.front_default
pokename.textContent = pokemon.name

pokeDiv.appendChild(pokename)
pokeDiv.appendChild(sprite)
pokeDiv.appendChild(habilidad)
pokeDiv.appendChild(move)
main.appendChild(pokeDiv)
pokeDiv.classList.add('card')
}
 
//Buscador.


form.addEventListener('submit', (e) => {
    e.preventDefault ()
const rastreo = search.value.toLocalLowereCase()

    if (rastreo && rastreo !== '') {
        
        getPokemons(urlAPIpokemon + rastreo)
        rastreo.value=''
    } else {
        alert('no encontrado');
    }
})
