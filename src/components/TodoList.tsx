import React from "react";
import { ITodo } from "../interface";
import "./style.css";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: ITodo[];
  handleEdit: (e: ITodo) => void;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  handleEdit,
  setIsEdit,
  setTodos,
}) => {
  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          handleEdit={handleEdit}
          setIsEdit={setIsEdit}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
