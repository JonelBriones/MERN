import './App.css';
import React, {useState,useEffect} from 'react'
import io from 'socket.io-client';
import User from './components/User';
function App() {
  // const [socket] = useState(() => io(':8000'));
  // const [messages,setMessages] = useState("");
  // useEffect(() => {
  //   console.log('Is this running?');
  //   socket.on('new_message_from_server', msg =>
  //   setMessages(prevMessages=> {
  //     return [msg,...prevMessages];
  //   })
  //   );
  //   // return () => socket.disconnect(true);
  // },[])
  // const message = (e) => {
  //   e.preventDefault()
  //   setMessages("")
  // }
  // const onChangeHandler = (e) => {
  //   e.preventDefault()
  //   setMessages(e.target.value)
  // }
  return (
    <div className="App">
      <User/>
    </div>
  );
}

export default App;
