import './App.css';
import React, {useState} from 'react'
function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo,setTodo] = useState('');
  const handleTodoForm = (e) => {
    e.preventDefault();
    const newTodo = {
      todo,
      complete : false,
      id : Math.floor(Math.random() * 10000)
    };
    setTodoList([...todoList, newTodo]);
    console.log(todoList)
    console.log(todo)
    setTodo('');
  }
  const handleToDeleteTodo = (id) => {
    // returning an object
    let checkTodo = [...todoList].filter((todoObj) => todoObj.id === id)
    // filters through the list of object comparing id's,
    // only return objects that don't match, excludes the give id
    setTodoList(todoList.filter((todo)=> todo.id !== id))
    console.log(`${checkTodo} has been deleted`,checkTodo)
  };
  // const handleToDeleteTodo = (idx) => {
  //   // if using an index instead of id
  //   const deleteTodo = todoList.filter((oneTodo, i) => {
  //     return i !== idx
  //   });
  //   setTodoList(deleteTodo);
  //   console.log(`${deleteTodo} has been deleted`,deleteTodo)
  // }
  const toggleToComplete = (id) => {
    const updateTodo = todoList.map((todo) => {
      if (id === todo.id) {
        todo.complete = !todo.complete;
      }
      return todo;
    })
    setTodoList(updateTodo);
  }
  // const toggleToComplete = (idx) => {
  //   const updateTodo = todoList.map((todo,i) => {
  //     if (idx === i) {
  //       todo.complete = !todo.complete;
  //     }
  //     return todo;
  //   })
  //   setTodoList(updateTodo);
  // }
  return (
    <div className="App">
      <header>
        <h1>Todo List App</h1>
      </header>
      <form onSubmit={handleTodoForm}>
        <input type="text" checked={todo.complete} value={todo} required onChange={(e) => setTodo(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
      {
        todoList.map((todo) => {
          const todoCompleted = [];
          if(todo.complete) {
            todoCompleted.push('line-through');
          }
          return (
            
            <div key={todo.id}>
              <p style={{
              textDecoration: todoCompleted
            }}>{todo.todo}</p>
              <input type="checkbox" checked={todo.complete} onChange={(e) => toggleToComplete(todo.id)}/>
              <button onClick={(e) =>handleToDeleteTodo(todo.id)}>Delete</button>
              
            </div>
          )
        })
      }
    </div>
  );
}

export default App;