import { useState } from 'react';
import './App.css';
import { InputForm } from './Components/InputForm';
import { Title } from './Components/Title';
import { TodoList } from './Components/TodoList';

function App() {
  const [taskList, setTaskList] = useState([]);
  
  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
