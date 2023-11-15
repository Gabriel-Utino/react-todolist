import './App.css';
import { InputForm } from './Components/InputForm';
import { Title } from './Components/Title';
import { TodoList } from './Components/TodoList';

function App() {
  return (
    <div className="body">
      <Title />
      <InputForm />
      <TodoList />
    </div>
  );
}

export default App;
