
import React, {useEffect, useState} from 'react';
import axios from 'axios'
const PokemonType = (props) => {
    const {id} = props;
    const [pokemon,setPokemon] = useState({});
    // // const navigate = useNavigate();

    useEffect(()=>{
        axios
        .get(`https://pokeapi.co/api/v2/type/${id}`)
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
      <div className='App'>
         <div>
           <h1>Pokemon Route</h1>
           {(id > 18 || id < 1 || id === ''|| id === 0)?
            <>
            <p>There are only 18 type!</p>
            </>:
            
            <>
            <p>Pokemon Type: {pokemon.name}</p>
            </>}
          </div>
      </div>
    )
}
export default PokemonType;