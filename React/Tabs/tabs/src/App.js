import './App.css';
import Tabs from './Components/Tabs';
import Display from './Components/Display';

import { useState } from 'react';
function App() {
  const [tabList, setTabList] = useState([]);
  
  const[toggleTab, setToggleTab] = useState(false);

  return (
    <div className="App">
      <Tabs
      tabList={tabList} setTabList={setTabList}/>
      <Display
      tabList={tabList} setTabList={setTabList} 
      toggleTab={toggleTab} setToggleTab={setToggleTab}
      />
    </div>
  );
}

export default App;
