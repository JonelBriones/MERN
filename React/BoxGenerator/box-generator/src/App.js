import React, {useState} from 'react';
import BoxForm from './Components/BoxForm';
import Display from './Components/Display';
import './App.css';


function App() {

    // creating getters and setters using state
    // state lift
    const [colorList, setColorList] = useState([]);
  
    return (
    <div className = "App">
      <BoxForm
      colorList={colorList}
      setColorList={setColorList}
      />
      <Display
      colorList={colorList}
      />
    </div>
  );
}

export default App;
