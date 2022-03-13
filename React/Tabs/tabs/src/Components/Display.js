import React, {useState} from 'react';
import '../App.css';
const Display = (props) => {
    const {tabList,setTabList,toggleTab, setToggleTab} = props;
    // on click, initiate toggle function, show description if toggle is true
    const toggleShow = (id) => {
        const showTodoInfo = tabList.map((tab) => { // after mapping through list, find tab that matches id
        // if the tab matches id, set show to true will display tab.description
        console.log(`${tab} matches the ${id}`)
        if (id === tab.id) {
            tab.show = !tab.show; // 
            console.log(tab.show)
          }
          return tab;
        })
        setTabList(showTodoInfo);
        console.log(showTodoInfo)
      }
    return tabList.map((tab) => {
        return (
            <div key={tab.id}> 
                <hr/>
                {/* checked function will set the object to have a false value, on click will change to the opposite  */}
                <button checked={tab.show} onClick={(e) => toggleShow(tab.id)}>{tab.tabName}</button>
                {
                    tab.show?
                    <p>{tab.description}</p> // if tab.show == false, return tab's description
                    :null // if tab.show == false, return null
                }
            </div>
            
        )
       
    }); 
}
export default Display;