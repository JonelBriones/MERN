import React from 'react';
// import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useParams} from 'react-router-dom';

import ProductForm from './components/ProductForm';
import Detail from './components/Detail';
import Update from './components/Update';
import ProductList from './components/ProductList';
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';
const App = () => {
    
    return(
	<div>
    	<BrowserRouter>
            <Routes>
	    <Route element={<ProductForm/>} path="/product/add" default />
	    <Route element={<Detail/>} path="/product/:id"/>
	    <Route element={<ProductList/>} path="/product/list"/>
	    <Route element={<Update/>} path="/product/edit/:id"/>
            </Routes>
    	</BrowserRouter>
        </div>
    ) 
}
export default App;


