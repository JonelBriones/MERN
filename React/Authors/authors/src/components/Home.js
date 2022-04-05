import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
const Home = (props) => {
    const {buttonText}= props;
    return (
        <Link to={"/"}>
            <button>{buttonText}</button>
        </Link>
    )
}
export default Home;