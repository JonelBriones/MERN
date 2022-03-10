import React, {useState} from 'react';


const BoxForm = (props) => {

const {colorList,setColorList} = props;

    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const handleForm = (e)=> {
        // to prevent brower from refreshing page/erasing data after submitting
        e.preventDefault();
        // ... / spread operator gives us access to the getter of colorlist's array
        setColorList([...colorList,{
            color : color,
            width : width + 'px',
            height : height + 'px'
        }]);
        // console.log submitted color
        console.log(colorList)
        // after submitting, removes the remaining value on input
        setColor("");
        setWidth("");
        setHeight("");
    }

    return (
        <div>
            <h1>Create a Box!</h1>
            <form onSubmit={(e)=> handleForm(e)}>
                <div>
                    <label>Type a Color!</label>
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
                <div>
                    <label>Type a Width!</label>
                    <input type="text" value={width} onChange={(e)=>{
                        console.log(e);
                        console.log(e.target);
                        console.log(e.target.value);
                        setWidth(e.target.value);
                    }}/>
                    {
                        width.length < 50 ?
                        <p>Width must be at least 50px</p>:
                        null
                    }
                </div>
                <div>
                    <label>Type a Height!</label>
                    <input type="text" value={height} onChange={(e)=>{
                        console.log(e);
                        console.log(e.target);
                        console.log(e.target.value);
                        setHeight(e.target.value);
                    }}/>
                    {
                        height.length < 50 ?
                        <p>Height must be at least 50px</p>:
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