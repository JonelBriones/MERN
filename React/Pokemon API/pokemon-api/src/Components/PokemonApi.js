import React, {useEffect, useState} from 'react';
import axios from 'axios'
const PokemonApi = (props) => {

    const [pokemon,setPokemon] = useState([]);
    useEffect(()=>{
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=807')
        // .then(response=>{setPokemon(response.data.results)})
        .then((response) => {
            setPokemon(response.data.results);
            console.log(pokemon)
        })
        .catch((err) => console.log(err));
    },[]);
    return (
        <div>
            {   
                pokemon.map((pokemon, index) => {
                    return (
                        <li key={index}>{pokemon.name}</li>
                        
                    )
                })
            }
        </div>
    )
    // let [catchPokemon,setCatchPokemon] = useState(false);
    // useEffect(() => {
    //         fetch('https://pokeapi.co/api/v2/pokemon')
    //             .then(response => response.json())
    //             .then(response => setPokemon(response.results))
    //             .catch(err => console.log(err))
    //     },[]);

    // const toggle = (e) => {
    //     catchPokemon = !catchPokemon;
    //     console.log(catchPokemon);
    // }
    // return (
    // <div>
    //     <button checked={catchPokemon} onClick={(e)=> toggle(e)}>Catch All Pokemons!</button>
    //     <ol> 
    //     {   
    //         pokemon.length > 0 && pokemon.map((pokemon, index) => {
    //             return (
    //                 <li key={index}>{pokemon.name}</li>
                    
    //             )
    //         })
    //     }
    //     </ol>
    // </div>
    // )
}
export  default PokemonApi;