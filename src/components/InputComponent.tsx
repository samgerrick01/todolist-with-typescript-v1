import React, { useRef } from "react";
import "./style.css";

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
  isEdit: boolean;
}

const InputComponent: React.FC<Props> = ({
  text,
  setText,
  handleSubmit,
  isEdit,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleSubmit(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        value={text}
        placeholder="Enter a Todo"
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        className="input-box"
      />
      <button type="submit" className="input-submit">
        {isEdit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default InputComponent;
