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
    };
    setTodoList([...todoList, newTodo]);
    console.log(todoList)
    console.log(todo)
    setTodo('');
  }
  const handleToDeleteTodo = (idx) => {
    // if using an index instead of id
    const deleteTodo = todoList.filter((oneTodo, i) => {
      return i !== idx
    });
    setTodoList(deleteTodo);
    console.log(`${deleteTodo} has been deleted`,deleteTodo)
  }
  const toggleToComplete = (idx) => {
    const updateTodo = todoList.map((todo,i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    })
    setTodoList(updateTodo);
  }
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
        todoList.map((todo,i) => {
          const todoCompleted = [];
          if(todo.complete) {
            todoCompleted.push('line-through');
          }
          return (
            
            <div key={i}>
              <p style={{
              textDecoration: todoCompleted
            }}>{todo.todo}</p>
              <input type="checkbox" checked={todo.complete} onChange={(e) => toggleToComplete(i)}/>
              <button onClick={(e) =>handleToDeleteTodo(i)}>Delete</button>
              
            </div>
          )
        })
      }
    </div>
  );
}

export default App;