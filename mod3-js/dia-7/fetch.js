"use strict";

const fetchPokemons = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2");

    const body = await response.json();

    const pokedexResponse = await fetch(body.pokedex);

    const pokedexBody = await pokedexResponse.json();

    const nationalPokedexResponse = await fetch(pokedexBody.results[0].url);

    const nationalPokedexBody = await nationalPokedexResponse.json();

    const pokemons = nationalPokedexBody.pokemon_entries;

    const pokemonNames = pokemons.slice(0, 20).map((pokemon) => {
      return pokemon.pokemon_species.name;
    });

    console.log(pokemonNames);
  } catch (error) {
    console.error(error.message);
  }
};

fetchPokemons();
