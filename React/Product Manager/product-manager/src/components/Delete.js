import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const Delete = (props) => {
    const navigate = useNavigate();
    const {product,setProduct,deleteHandler} = props;
return (
    <button onClick={deleteHandler}>Delete</button>
)

}

export default Delete;