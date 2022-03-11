import React, {useState} from 'react';
import '../App.css';
const Display = (props) => {
    const {tabList} = props;
    const onClickHandler = (e,value) => {
        alert(`${value.tabName} ${value.description}`);
        // using dot notation to pull out the value data seperatly
        console.log(value);
    }
    return tabList.map((tab,index) => {
        return (
            <div key={index}> 
                <button onClick={(e) => onClickHandler(e, tab)}>{tab.tabName}</button>
            
            </div>
            
        )
       
    }); 
}
export default Display;