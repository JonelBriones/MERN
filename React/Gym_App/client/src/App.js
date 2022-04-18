import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// Admin
import AdminLoginAndRegistration from './components/Admin/AdminLoginAndRegistration';
import Dashboard from './components/Admin/Dashboard';
import AdminViewProduct from './View/AdminView/AdminViewProduct';
import CreateProduct from './components/Products/CreateProduct';
// USERS
import UserRegistration from './View/UserView/UserRegistration';
import Home from './View/UserView/Home';
import Store from './View/UserView/Store';
import ViewProduct from './View/UserView/ViewProduct';
// LOGGED USERS
import Profile from './View/UserView/Profile';

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
          {/* USERS*/}
          <Route element={<UserRegistration/>} path="/users/"/>
          <Route element={<Home/>} path="/"/>
          <Route element={<Store/>} path="/store"/>
          <Route element={<ViewProduct/>} path="/store/:product_name"/>
          {/* LOGGED USERS */}
          <Route element={<Profile/>} path="/profile/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
