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
import Profile from './components/Gym/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* ADMIN */}
          <Route element={<AdminLoginAndRegistration/>} path="/admin"/>
          <Route element={<Dashboard/>} path="/dashboard"/>
          <Route element={<AdminViewProduct/>} path="/admin/products"/>
          <Route element={<CreateProduct/>} path="/products/add"/>
          {/* LOGGED USERS */}
          <Route element={<Profile/>} path="/profile/:id"/>
          {/* USERS AND GYM */}
          <Route element={<Home/>} path="/"/>
          <Route element={<UserRegistration/>} path="/users/"/>
          <Route element={<Store/>} path="/store"/>
          <Route element={<ViewProduct/>} path="/products/product/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
