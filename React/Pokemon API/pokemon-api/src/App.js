import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios'
function App() {
    const [pokemon,setPokemon] = useState({});
    const [search,setSearch] = useState('');
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
    return (
      <>
        <div className='App'>
          <h1>Pokemon API</h1>
          <form onSubmit={searchPokemon}>
              <p>Use the Pokedex!</p>
              <input type="number" value={search} required onChange={(e) => setSearch(e.target.value)}/>
              <button type="submit">Search</button>
              {
                  search > 898 || search < 1?
                  <>
                  <p>Search all 898 Pokemons in our Pokedex!</p>
                  </>:
                  
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
          </form>
              {/* Use if using search button */}
              {
                  search === 0 || search === '' ?
                  <button onClick={() => setSearch(search - 1)} disabled>previous</button>:
                  <button onClick={() => setSearch(search - 1)}>previous</button>
              }   
              {
                  search === 898 ?
                  <button onClick={() => setSearch(search + 1)} disabled>Next</button>:
                  <button onClick={() => setSearch(search + 1)}>Next</button>
              }
        </div>

      </>
    )
  }

export  default App;