import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PokemonName from './Components/PokemonName';
import PokemonForm from './Components/PokemonForm';
import PokemonType from './Components/PokemonType';
import { useParams } from 'react-router-dom';
const PokemonApiLink = () => {
  return (
    <Link to="/PokemonApi" className='App'>
      <h1>Enter The Pokedex API!</h1>
    </Link>
  )
}
const SelectId = () => {
  const {select,id} = useParams();
  
  return (
    <>
    <PokemonForm
    select={select}
    id={id}
    />
    {
      select === 'pokemon'?
      <PokemonName
      select={select}
      id={id}/>:
      <PokemonType
      select={select}
      id={id}/>
    }
    </>
  )
}
  function App(props) {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<PokemonApiLink/>}></Route>
          <Route path="/PokemonApi" element={<SelectId/>}></Route>
          <Route path="/PokemonApi/:select/:id" element={<SelectId/>}></Route>
        </Routes>
      </BrowserRouter>
      
      </>
    )
  }

export  default App;