// Delete Button Component
const Delete = (props) => {
    const {deleteHandler} = props;
    return (
        <button onClick={deleteHandler}>Delete</button>
    )
}
export default Delete;