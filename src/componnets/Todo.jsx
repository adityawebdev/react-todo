import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FaEdit onClick={() => editTodo(task.id)} />
        <FaTrash onClick={() => deleteTodo(task.id)} className="fa-trash" />
      </div>
    </div>
  );
};

export default Todo;
