
// Variable de la API's.

 const urlAPIpokemon = 'https://pokeapi.co/api/v2/pokemon/';

 //Variables HTML.

const form = document.getElementById('form');
const search = document.getElementById('search');
 const submit = document.getElementById('submit');
 const main = document.getElementById('main');

const getPokemons = async (url,id) => {
    const res = await fetch (url + id)
    const data = await res.json()
    console.log(data);
    //showPokemons(data.results);

}

 function TraerPokemones (number) {

    for (let i = 1; i <= number; i++) {
       
        getPokemons(urlAPIpokemon, i)
        
    }
 }

 TraerPokemones(20);


function CrearPokemons(pokemon) {
    


}
 

// const showPokemons = (pokemons) => {

//     main.interHTML =''
//     movies.forEach( pokemons => {
        
//     });
// }

