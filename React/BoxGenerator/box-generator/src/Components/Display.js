import React, {useState} from 'react';

const Display = (props) => {
    const {colorList} = props;
    return (
        <div>
            <h1>Display All Boxes</h1>
        {
            colorList.map((color,index) => {
                return (
                    // retrieve by the getter
                    // index indicates what index the color is in colorList
                    <div key={index}> 
                        <p>{color.color}</p>
                    </div>
                )
            })
        }
    </div>
    )
}
export default Display;