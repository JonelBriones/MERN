import './App.css';
import React, {useState} from 'react'
function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');
  const [check,setCheck] = useState(false);
  const [checkStyle, setCheckStyle] = useState(0);
  const checkMode = [
    {
      textDecoration: "none",
    },
    {
      textDecoration: "line-through",
    }
  ]
  const handleTodoStyle = (id) => {
    console.log('hello')
  }
  const handleForm = (e) => {
    e.preventDefault();
    // create an object
    const newTodo = {
    // es6 and after
      todo,
      check,
      checkStyle,
      id : Math.floor(Math.random() * 10000) 
    // before es6
    // todo : todo,
    //   id : Math.floor(Math.random() * 10000) 
    };
    // add the object into a list of objects
    setTodoList([...todoList, newTodo]);
    console.log(newTodo);
    setTodo(''); // resets the input form after submit
  }
  
  const handleToCheck = (id) => {
    let checkTodo = [...todoList].filter((todoObj) => todoObj.id === id)
    // console.log(checkTodo)
    if (check === false) {
      setCheck(true);
      setCheckStyle(1);
      console.log('Check');
      console.log(checkStyle);
    } else {
      setCheck(false);
      setCheckStyle(0);
      console.log('Not Done');
      console.log(checkStyle);
    };
  };
  const deleteTodo = (id) => {
    // returning an object
    let checkTodo = [...todoList].filter((todoObj) => todoObj.id === id)
    // filters through the list of object comparing id's,
    // only return objects that don't match, excludes the give id
    setTodoList(todoList.filter((todo, index)=> todo.id !== id))
    console.log(`${checkTodo} has been deleted`,checkTodo)
  };
  // console.log(handleToCheck)
  return (
    <div className="App">
      <h1>Todo List Tracker</h1>
      <form onSubmit={handleForm}>
        <input type="text"onChange={(e) => setTodo(e.target.value)} 
        value={todo} required/>
        
        <button type="submit">Add Todo!</button>
      </form>
      <h1>List of Todo</h1>
      {/* Using map function to display all objects form the list */}
      {todoList.map((todo) => (
        // every object listed will have its very own id associated with it
        <div key={todo.id}>
          <p style={{
            textDecoration: `${checkMode[checkStyle]}`
          }}>{todo.todo}</p>
          {/* <p style={checkMode[checkStyle]}>{todo.todo}</p> */}
          <input type="checkbox" onChange={(e)=>handleToCheck(todo.id)}/>
          <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default App;