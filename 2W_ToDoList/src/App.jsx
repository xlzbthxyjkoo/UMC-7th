import React, { useContext, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import TodoItem from "./components/Items";
import { TodoContext } from "./context/TodoContext";

function App() {
  const {
    todos,
    text,
    setText,
    editText,
    setEditText,
    editingId,
    setEditingId,
    handleSubmit,
    addTodo,
    deleteTodo,
    updateTodo,
  } = useContext(TodoContext);
  return (
    <div className="app">
      <form className="todo-form" onSubmit={handleSubmit}>
        <Input
          className="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="add-btn" onClick={addTodo} type="submit">
          할 일 등록
        </Button>
      </form>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onEdit={setEditingId}
            onUpdate={updateTodo}
            editingId={editingId}
            editText={editText}
            setEditText={setEditText}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
