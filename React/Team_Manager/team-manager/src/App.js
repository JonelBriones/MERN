import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import AddPlayer from './components/AddPlayer';
import AllPlayers from './components/AllPlayers';
import OnePlayer from './components/OnePlayer';
import GameStatus from './components/GameStatus';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AddPlayer/>} path="/add" default/>
          <Route element={<AllPlayers/>} path="/" />
          <Route element={<OnePlayer/>} path="/edit/:id" />
          <Route element={<GameStatus/>} path="/status/game" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
