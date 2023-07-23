import { useState } from "react";
import { Flex, Heading, useColorMode, Button } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import InputComponent from "./components/InputComponent";
import TodoList from "./components/TodoList";
import { ITodo } from "./interface";
import uuid from "react-uuid";

const App: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const [toggle, settoggle] = useState<boolean>(false);

  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>("");

  const handleToggle = (): void => {
    settoggle(!toggle);
    toggleColorMode();
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (text) {
      if (isEdit) {
        setTodos(
          todos.map((todo) =>
            todo.id === editId ? { ...todo, todo: text } : todo
          )
        );
        setIsEdit(false);
      } else {
        setTodos([...todos, { id: uuid(), todo: text, isDone: false }]);
      }
    }
    setText("");
  };

  const handleEdit = (value: ITodo): void => {
    setEditId(value.id);
    setText(value.todo);
  };

  return (
    <Flex display="flex" flexDirection="column">
      <Heading display="flex" justifyContent="flex-end" padding="16px">
        <Button onClick={handleToggle}>
          {!toggle ? <FaMoon /> : <FaSun />}
        </Button>
      </Heading>
      <Flex display="flex" justifyContent="center">
        <Heading zIndex="999">Simple Todo with TS</Heading>
      </Flex>
      <Flex margin="1rem">
        <InputComponent
          text={text}
          setText={setText}
          handleSubmit={handleSubmit}
          isEdit={isEdit}
        />
      </Flex>
      <Flex padding="16px" display="flex" justifyContent="center">
        {todos.length === 0 && (
          <span style={{ fontSize: "30px" }}>NO TODOS</span>
        )}
        {todos.length !== 0 && (
          <TodoList
            todos={todos}
            handleEdit={handleEdit}
            setIsEdit={setIsEdit}
            setTodos={setTodos}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default App;
