// This components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateForm = (props) => {
    /* Destructuring props that will be passed
    from newProduct/updateProduct forms
    */
    const {
        onSubmitHandler,
        errors, 
        newProduct, 
        onChangeHandler, 
        buttonText
    } = props;

    return (
        <div className='form-container'>
        <Form onSubmit={onSubmitHandler} className="form-control">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{
                    errors.title?
                    <span>{errors.title.message}</span>:
                    <label>Title</label>
                }</Form.Label>
    <Form.Control type="text" name="title" placeholder="Enter Product"
    value={newProduct.title} onChange= {(e)=> onChangeHandler(e)} />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{
                    errors.price?
                    <span>{errors.price.message}</span>:
                    <label>Price</label>
                }</Form.Label>
    <Form.Control type="text" name="price" placeholder="Enter Price"
    value={newProduct.price} onChange= {(e)=> onChangeHandler(e)} />
  </Form.Group>
  <Form.Group>
  <Form.Label>{
                    errors.description?
                    <span>{errors.description.message}</span>:
                    <label>Description</label>
                }</Form.Label>
    <Form.Control type="text" name="description" placeholder="Enter Description"
    value={newProduct.description} onChange= {(e)=> onChangeHandler(e)} />
  </Form.Group>
                <Button variant="success" type="submit">{buttonText}</Button>
            </Form>
        </div>
    )
}
export default CreateForm;