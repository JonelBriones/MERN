import logo from './logo.svg';
import './App.css';
import UserRegistration from './components/User/UserRegistration';
import CreateProduct from './components/Products/CreateProduct';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Gym/Home';
import Store from './components/Gym/Store';
import ViewProduct from './components/Gym/ViewProduct';
import AdminLoginAndRegistration from './components/Admin/AdminLoginAndRegistration';
import Dashboard from './components/Admin/Dashboard';
import AdminViewProduct from './components/Admin/AdminViewProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AdminLoginAndRegistration/>} path="/admin"/>
          <Route element={<Dashboard/>} path="/dashboard"/>
          <Route element={<Home/>} path="/"/>
          <Route element={<UserRegistration/>} path="/users/"/>
          <Route element={<CreateProduct/>} path="/products/add"/>
          <Route element={<Store/>} path="/products"/>
          <Route element={<AdminViewProduct/>} path="/products"/>
          <Route element={<ViewProduct/>} path="/products/product/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
