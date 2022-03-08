import './App.css';
import UserForm from './components/form';
function App() {
  return (
    <div>
      <UserForm setUsername={""} setEmail={""} setPassword={""}/>
    </div>
  );
}

export default App;
