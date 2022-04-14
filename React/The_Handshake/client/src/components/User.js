import React, {useState, useEffect} from 'react';
const User = (props) => {
    const {user,setUser} = props;
    const [name,setName] = useState("")
    const onHandleForm = (e) => {
        e.preventDefault();
        setUser([...user,{
            name : name,
        }])
        setName('');
    }    
    return (
        <div>
            <form onSubmit={(e)=>onHandleForm(e)}>
                <input type="text" required onChange={(e)=>{setName(e.target.value)}}/>
                <button type="submit">Start Chat</button>
            </form>
        </div>
    )

}
export default User;