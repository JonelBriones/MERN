import React, {useState} from 'react';


const BoxForm = (props) => {

const {colorList,setColorList} = props;

    const [color, setColor] = useState("");

    const handleForm = (e)=> {
        // to prevent brower from refreshing page/erasing data after submitting
        e.preventDefault();
        // ... / spread operator gives us access to the getter of colorlist's array
        setColorList([...colorList,{
            color : color
        }]);
        // console.log submitted color
        console.log(colorList)
        // after submitting, removes the remaining value on input
        setColor("");
    }

    return (
        <div>
            <h1>Create a Box!</h1>
            <form onSubmit={(e)=> handleForm(e)}>
                <div>
                    <label>Enter a Color!</label>
                    <input type="text" value={color} onChange={(e)=>{
                        console.log(e); // event
                        console.log(e.target); // even of input
                        console.log(e.target.value); // value of input
                        setColor(e.target.value); // sets value as a new Color
                    }}/>
                    {
                        color.length < 1 ?
                        <p>Enter a Color!</p>:
                        null
                    }
                </div>
                    <button>Create Box!</button>
            </form>
            {/* To display all colors added to the list */}
        </div>
    )
}
export default BoxForm;