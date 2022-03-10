import React, {useState} from 'react';
import styles from './BoxColor.module.css';
const Display = (props) => {
    const {colorList} = props;
    return (
        <div className="container">
            <div className={styles.boxContainer}>
                <h1>Display All Boxes</h1>
                {
                    // to itterate through the colorList using 'box'
                colorList.map((box,index) => {
                    return (
                        // retrieve by the getter
                        // index indicates what index the color is in colorList
                        // dot notation with object and its attribute
                        // passing variables in inline style
                        <div className={styles.box} style={{
                            backgroundColor: box.color,
                            width: box.width,
                            height: box.height
                            }} key={index}> 
                            <p>{box.color}</p>
                        </div>
                        
                    )
                })
                }
            </div>
        </div>
    )
}
export default Display;