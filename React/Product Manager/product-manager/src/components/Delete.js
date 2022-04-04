// Delete Button Component
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Delete = (props) => {
    const {deleteHandler,editHandler,productId} = props;

    // const deleteProduct = (thisProduct) => {
    //     // passing the whole object to console.log the key:value
    //     let productId = thisProduct._id; 
    //     console.log(thisProduct)
    //     axios.delete('http://localhost:8000/api/product/' + productId)
    //         .then(res => {
    //             console.log(`Deleting Product:${thisProduct.title} ID:${productId}`);
    //             removeFromDom(productId)
    //             navigate("/product/list");
    //         })
    //         .catch(err => console.log(err))
    // };

    return (
        <div>
            <Link to={`/product/edit/${productId}`}><Button variant="info" onClick={editHandler}>Edit</Button></Link>
            <Button variant="danger" onClick={deleteHandler}>Delete</Button>
        </div> 
   )
}
export default Delete;