import { Link } from "react-router-dom";

const Home = (props) => {
    
    return (
        <header>
            <Link to={'/product'}><button>Home</button></Link>
        </header>
    )
}

export default Home;