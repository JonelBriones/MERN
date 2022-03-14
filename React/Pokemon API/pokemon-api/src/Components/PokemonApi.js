import React, {useEffect, useState} from 'react';

const PokemonApi = (props) => {
    const [pokemon,setPokemon] = useState([]);

    useEffect(() => {
            fetch('https://pokeapi.co/api/v2/pokemon')
                .then(response => response.json())
                .then(response => setPokemon(response.results))
                .catch(err => console.log(err))
        },[pokemon.catch]);
    
    return (
    <div>
        <button checked={pokemon.catch}>Catch All Pokemons!</button>
        <ol>
        {   
            pokemon.length > 0 && pokemon.map((pokemon, index) => {
                return (
                    <li key={index}>
                        {pokemon.name}
                    </li>
                )
            })
        }
        </ol>
    </div>
)
}
export  default PokemonApi;