import './App.css';
import React, {useState,useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NewAuthor from './components/NewAuthor';
import DisplayAuthors from './components/DisplayAuthors';
import DisplayOneAuthor from './components/DisplayOneAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<NewAuthor/>} path="/add" default/>
          <Route element={<DisplayAuthors/>} path="/" default/>
          <Route element={<DisplayOneAuthor/>} path="/show/:id" default/>
          <Route element={<UpdateAuthor/>} path="/edit/:id" default/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
