import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const PokemonForm = (props) => {
    // const {id} = props;
    const [id,setId] = useState(1);
    const [select,setSelect] = useState('');
    const navigate = useNavigate();
    const searchPokemon = (e) => {
        e.preventDefault();
        console.log('form')
        console.log(id);
        navigate(`/PokemonApi/${select}/${id}`);
        // setId('');
        //  setPokemon('')
        // setSelect('')
        // freely type in the pokedex number without pressing search, no need to reset form
    }  
    return (
        <div className='App'>
        <h1>Pokemon API</h1>
            <form onSubmit={searchPokemon}>
                <p>Use the Pokedex!</p>
                <div>
                <select required onChange={(e,)=> setSelect(e.target.value)}>
                    <option value="">Category</option>
                    <option value="pokemon">Pokemon</option>
                    <option  value="type">Type</option>
                    </select>
                {/* {
                    !select?
                    <>
                    <select required onChange={(e)=> setSelect(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="pokemon">Pokemon</option>
                    <option  value="type">Type</option>
                    </select>
                    </>:
                    <>
                    <select>
                    <option disabled>{select}</option>
                    </select>
                    </>
                } */}
                <div>
                    <label>ID:</label>
                    <input type="number" min="1" max="898" value={id} required onChange={(e) => setId(e.target.value)}/>
                </div>
                
                </div>
                {
                    id > 0 && id < 899 ?
                    <button type="submit" >Search</button>:
                    <button type="submit" disabled>Search</button>
                }
                {/* <div>
                    {
                        id === 1 || id === '' ?
                        <button onClick={(e) => setId(id - 1)} disabled>previous</button>:
                        <button onClick={(e) => setId(id - 1)}>previous</button>
                    }   
                    {
                        id === 898 || id === ''?
                        <button onClick={(e) => setId(id + 1)} disabled>Next</button>:
                        <button onClick={(e) => setId(id + 1)}>Next</button>
                    }
                </div> */}
            </form>

        </div>
    )
}

export default PokemonForm;