import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NewAuthor from './components/NewAuthor';
import DisplayAuthors from './components/DisplayAuthors';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<NewAuthor/>} path="/add" default/>
          <Route element={<DisplayAuthors/>} path="/" default/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
