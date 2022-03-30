import {useState} from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import DisplayProduct from './components/DisplayProduct';
import react from 'react';
function App() {
  const [product,setProduct] = useState([]);
  const [toggleProduct,setToggleProduct] = useState(false);
  return (
    <div>
      <ProductForm
      product={product} setProduct={setProduct}/>
      <DisplayProduct
      product={product} setProduct={setProduct}/>
    </div>
  );
}

export default App;
