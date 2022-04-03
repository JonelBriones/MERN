// This components

const Form = (props) => {
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
        <form onSubmit={onSubmitHandler}>
                <div>
                {
                    errors.title?
                    <span>{errors.title.message}</span>:
                    <label>Title</label>
                }
                <input type="text" name="title" value={newProduct.title} onChange= {(e)=> onChangeHandler(e)}/>
                </div>
                <div>
                {
                    errors.price?
                    <span>{errors.price.message}</span>:
                    <label>Price</label>
                }
                <input type="number" name="price" value={newProduct.price}  onChange= {(e)=>onChangeHandler(e)}/>
                </div>
                <div>
                {
                    errors.description?
                    <span>{errors.description.message}</span>:
                    <label>Description</label>
                }
                <input type="text" name="description" value={newProduct.description}  onChange= {(e)=>onChangeHandler(e)}/>
                </div>
                <button type="submit">{buttonText}</button>
            </form>
    )
}
export default Form;