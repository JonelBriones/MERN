import React, {useEffect, useState} from 'react';
import axios from 'axios'
const PokemonApi = (props) => {

    const [pokemon,setPokemon] = useState({});
    const [search,setSearch] = useState(1);
    useEffect(()=>{
        axios
        
        .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        // .then(response=>{setPokemon(response.data.results)})
        .then((response) => {
            setPokemon(response.data);
            // console.log(pokemon)
        })
        .catch((err) => console.log(err));
        console.log(pokemon)
    },[search]);
    const searchPokemon = (e) => {
        e.preventDefault();
        console.log(search);
        // setPokemon('')
        // freely type in the pokedex number without pressing search, no need to reset form
    }
    // const next = (e) => {
    //     setSearch++;
    // }
    // const previous = (e) => {
    //     setSearch--;
    // }
    return (
        <div>
            <h1>Pokemon API</h1>
            <form onSubmit={searchPokemon}>
                <p>Use the Pokedex!</p>
                <input type="number" value={search} required onChange={(e) => setSearch(e.target.value)}/>
                {
                    search > 898 || search < 1?
                    <p>Pokedex is limitted to 1 - 898</p>:
                    <>
                    <p>Pokemon Name: {pokemon.name}</p>
                    <p>Pokedex #{pokemon.id}</p>
                    {/* make another api to display type to the matched pokemon id */}
                    <p>Pokemon Weight: {pokemon.weight}</p>
                    </>

                }
                {/* any number typed in form will automatically
                render the page without search
                */}
                {/* <button type="submit">Search</button> */}
            </form>
                {/* Use if using search button */}
                {
                    search === 1 ?
                    <button onClick={() => setSearch(search - 1)} disabled>previous</button>:
                    <button onClick={() => setSearch(search - 1)}>previous</button>
                }   
                {
                    search === 898 ?
                    <button onClick={() => setSearch(search + 1)} disabled>Next</button>:
                    <button onClick={() => setSearch(search + 1)}>Next</button>
                }
                

            {/* {   if we want to read all objects from api
                pokemon.map((pokemon, index) => {
                    return (
                        <li key={index}>{pokemon.name}</li>
                        
                    )
                })
            } */}
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