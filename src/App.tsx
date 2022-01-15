import React, { useState, ChangeEvent } from "react";
import "./App.css";
import { ITask } from "./Interfaces";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else if (event.target.name === "deadline") {
      setDeadLine(+event.target.value);
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            onChange={handleChange}
            name="task"
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            onChange={handleChange}
            name="deadline"
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList"> </div>
    </div>
  );
};

export default App;
