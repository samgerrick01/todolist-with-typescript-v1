import React from "react";
import { ITodo } from "../interface";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

interface Props {
  todo: ITodo;
  handleEdit: (value: ITodo) => void;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const SingleTodo: React.FC<Props> = ({
  todo,
  handleEdit,
  setIsEdit,
  setTodos,
  todos,
}) => {
  const handleChangeStatus = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className={todo.isDone ? "todos-single done" : "todos-single"}>
      {todo.todo}
      <div style={{ display: "flex", cursor: "pointer", gap: "8px" }}>
        <FaEdit
          onClick={() => {
            handleEdit(todo);
            setIsEdit(true);
          }}
        />
        <FaTrash onClick={() => handleDelete(todo.id)} />
        <FaCheck onClick={() => handleChangeStatus(todo.id)} />
      </div>
    </div>
  );
};

export default SingleTodo;
