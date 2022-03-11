import './App.css';
import Tabs from './Components/Tabs';
import Display from './Components/Display';
import Description from './Components/Description';
import { useState } from 'react';
function App() {
  const [tabList, setTabList] = useState([]);
  return (
    <div className="App">
      <Tabs
      tabList={tabList}
      setTabList={setTabList}/>
      <Display
      tabList={tabList}/>
      {/* <Description/> */}
    </div>
  );
}

export default App;
