import './App.css';
import React, {useState,useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NewAuthor from './views/NewAuthor';
import DisplayAuthors from './views/DisplayAuthors';
import DisplayOneAuthor from './views/DisplayOneAuthor';
import UpdateAuthor from './views/UpdateAuthor';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLogReg from './views/UserLogReg';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<UserLogReg/>} path="/"/>
          <Route element={<NewAuthor/>} path="/add" />
          <Route element={<DisplayAuthors/>} path="/home" default />
          <Route element={<DisplayOneAuthor/>} path="/show/:id" default/>
          <Route element={<UpdateAuthor/>} path="/edit/:id" default/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
