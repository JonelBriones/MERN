import { Link } from "react-router-dom";

const Home = (props) => {
    
    return (
        <header>
            <Link to={'/product/list'}><button>Home</button></Link>
            <Link to={'/product/add'}><button>Add Product!</button></Link>
            
        </header>
    )
}

export default Home;