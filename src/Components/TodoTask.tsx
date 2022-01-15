import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete:string) : void;
}

const TodoTask = ({ task,completeTask }: Props) => {
   
  const taskDeleteHandler = () => {
      completeTask(task.taskName)
  }

  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button onClick={taskDeleteHandler}>X</button>
    </div>
  );
};

export default TodoTask;
