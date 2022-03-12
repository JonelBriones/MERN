import React, {useState} from 'react';
import '../App.css';
const Display = (props) => {
    const {tabList,toggleTab, setToggleTab} = props;
    // on click, initiate toggle function, show description if toggle is true
        const toggle = (e,tab) => {
            e.preventDefault();
            console.log(tab)
            if (toggleTab === false) {
                setToggleTab(true);
                console.log(toggleTab)
            } else {
                setToggleTab(false);
                console.log(toggleTab)
            }
        }
    // const onClickHandler = (e,value) => {
    //     alert(`${value.tabName} ${value.description}`);
    //     // using dot notation to pull out the value data seperatly
    //     console.log(value);
    // }
    return tabList.map((tab) => {
        return (
            <div key={tab.id}> 
                <hr/>
                {/* <button onClick={(e) => onClickHandler(e, tab)}>{tab.tabName}</button> */}
                <button onClick={(e) => toggle(e,tab)}>{tab.tabName}</button>
                {
                    toggleTab?
                    <p>{tab.description}</p>
                    :null
                }
            </div>
            
        )
       
    }); 
}
export default Display;