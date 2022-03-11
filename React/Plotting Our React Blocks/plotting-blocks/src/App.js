import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement.js';
 
                
function App() {
  return (
    <div className="app">
        <Header />
        <div class="flex">
          <Navigation />
          <Main>
              <SubContents />
              <SubContents />
              <SubContents />
              <Advertisement />
          </Main>
        </div>
    </div>
  );
}
                
export default App;

