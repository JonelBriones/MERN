import React, { useState } from 'react';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';
    
function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
  
  return (
      <>
           {/* We pass in our function that will take in a string and update our state in our App component */}
          <MessageForm onNewMessage={ youveGotMail } />
           {/* We pass our state getter from our App component down to MessageDisplay through props
              for displaying its value */}
          <MessageDisplay message={ currentMsg } />
      </>
  );
}
    
export default App;

