const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const fetchPokemon = async (name) => {
    const response = await fetch(`${BASE_URL}${name.toLowerCase()}`);
    const pokemon = await response.json();
    return pokemon;
}