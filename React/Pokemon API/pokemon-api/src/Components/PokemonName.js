
import React, {useEffect, useState} from 'react';
import axios from 'axios'
const PokemonName = (props) => {
    const {id} = props;
    const [pokemon,setPokemon] = useState({});
    // // const navigate = useNavigate();

    useEffect(()=>{
        axios
        // .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // .then(response=>{setPokemon(response.data.results)})
        .then((response) => {
            setPokemon(response.data);
        })
        .catch((err) => console.log(err));
        console.log(pokemon)
    },[props]); //adding more object will refresh on change
    // // const searchPokemon = (e) => {
    // //     e.preventDefault();
    // //     console.log(search);
    // //     navigate(`/PokemonApi/${select}/${search}`);
        
    // //     // setPokemon('')
    // //     // setSelect('')
    // //     // freely type in the pokedex number without pressing search, no need to reset form
    // // }
    return (
      <>
         <div className='App'>
           <h1>Pokemon Route</h1>
           {(id > 898 || id < 1 || id === ''|| id === 0)?
                <p>There are 898 Pokemons in our Pokedex!</p>:
                <>
                <p>Pokemon Name: {pokemon.name}</p>
                <p>Pokedex #{pokemon.id}</p>
                <p>Pokemon Weight: {pokemon.weight}</p>
                </>}
          </div>
      </>
    )
}
export default PokemonName;