import '../App.css';
import React, {useState} from 'react';
const Tabs = (props) => {
    const {tabList, setTabList} = props;
        const [tabName,setTabName] = useState('');
        const [description,setDescription] = useState('');
        const [id,setId] = useState('');
        const handleForm = (e) => {
            e.preventDefault();
            setTabList([...tabList,{
                tabName : tabName,
                description : description,
                id : Math.floor(Math.random() * 10000),
                show : false
            }])
            // console.log(tabList);
            setTabName('');
            setDescription('');
        }

    return (
        <div>
            <form onSubmit={(e) =>handleForm(e)}>
                <div>
                    <label>Create a Tab!</label>
                    <input type="text" value={tabName} required onChange={(e) => {
                        setTabName(e.target.value);
                    }}></input>
                </div>

                <div>
                    <label>Add a description!</label>
                    <input type="textarea" value={description}  required onChange={(e) => {
                        setDescription(e.target.value);
                    }}></input>
                </div>

                <div>
                    <button>Add Tab!</button>  
                </div>

            </form>
        </div>
    )
}

export default Tabs;