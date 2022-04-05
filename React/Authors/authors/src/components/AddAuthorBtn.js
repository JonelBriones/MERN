import { Link } from "react-router-dom";
const AddAuthorBtn = (props) => {
    const {addAuthorBtn} = props;
    return (
        <Link to={`/add`}>
            <button onClick={addAuthorBtn}>Add Author!</button>
        </Link>
    )
}
export default AddAuthorBtn;