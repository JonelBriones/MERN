import React, { useState } from 'react';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';
    
function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage ); // set the current mail to our new msg
  }
  
  return (
      <>
           {/* We pass in our function that will take in a string and update our state in our App component */}
          {/* this will be lifting state */}
          {/* passing in onNewMessage from MessageForm.js */}
          {/* youveGotMail === msg */}
          <MessageForm onNewMessage={ youveGotMail } /> 
           {/* We pass our state getter from our App component down to MessageDisplay through props
              for displaying its value */}
              {/* displays the new message after submitting */}
          <MessageDisplay message={ currentMsg } />
      </>
  );
}
    
export default App;

