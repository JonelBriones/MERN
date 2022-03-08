import './App.css';

// required to import the component file to js file
import PersonCard from './components/PersonCard';

function App() {
  return (
    // manually inserting our own data into each component with relative props
   <div className="App">
     <PersonCard firstName={ "Jonel" } lastName= { "Briones"}
         age={ 21 } hairColor={ "black" } />
      <PersonCard firstName={ "Jonathan" } lastName= { "Briones"}
         age={ 32 } hairColor={ "black" } />
      <PersonCard firstName={ "John-John" } lastName= { "Briones"}
         age={ 31 } hairColor={ "black" } />
    </div>
  );
}
  
  

export default App;
