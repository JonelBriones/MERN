import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = (props) => {
    
    return (
        <header>
            <Link to={'/product/list'}><button>Home</button></Link>
            <Link to={'/product/add'}><button>Add Product!</button></Link>
            
        </header>
    )
}

export default Home;