import './App.css';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ViewProject from './pages/ViewProject';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/home"/>
        <Route element={<Blog/>} path="/blog"/>
        <Route element={<Contact/>} path="/contact"/>
        <Route element={<Projects/>} path="/projects"/>
        <Route element={<ViewProject/>} path="/project/:id"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
