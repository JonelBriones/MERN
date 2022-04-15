import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NewAuthor from './views/NewAuthor';
import DisplayAuthors from './views/DisplayAuthors';
import DisplayOneAuthor from './views/DisplayOneAuthor';
import UpdateAuthor from './views/UpdateAuthor';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLogReg from './views/UserLogReg';
import Profile from './views/Profile';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<UserLogReg/>} path="/"/>
          <Route element={<NewAuthor/>} path="/add"/>
          <Route element={<DisplayAuthors/>} path="/home" default />
          <Route element={<DisplayOneAuthor/>} path="/show/:id"/>
          <Route element={<Profile/>} path="/profile/:username"/>
          <Route element={<UpdateAuthor/>} path="/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
