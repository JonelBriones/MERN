import React from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useParams
} from "react-router-dom";
const Is = (props) => { 
  const { is } = useParams();
    if (isNaN(is) && is === 'home') {
      return (
        <>
          <h1>Welcome</h1> 
        </>
    );
    }
    if (isNaN(is) && is !== 'home' ) {
      return (
        <>
          <h1>{is}</h1>
        </>
      )
    } else {
      return (
        <>
          <h1>This number is : {is} </h1>
        </>
      )
    }
} 
const StringDecoration = () => {
  const {string,color,backgroundColor} = useParams();
  console.log(string);
  console.log(color);
  console.log(backgroundColor);
  return (
    <>
        <h1 style={{
        color: color,
        backgroundColor: backgroundColor
        }}>{string}</h1>  
    </>
  )
}
function App() {
  return (
    <BrowserRouter>
      <p>
        {/* <Link to="/location/seattle">Seattle</Link> */}
      </p>
      <Routes>
        <Route path=":is" element={<Is />}/>
      {/* path is what is inside the url,
       anything after : is our variable we want to store,
       element refers to our react function  */}
      <Route path=":string/:color/:backgroundColor" element={<StringDecoration />}/>

      </Routes>
    </BrowserRouter>
  );
}
    
export default App;
