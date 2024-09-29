import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import TodoItem from "./components/Items";

function App() {
  // 상태 관리
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "예지" },
  ]);
  const [text, setText] = useState(""); // 새 할 일 입력 텍스트
  const [editingId, setEditingId] = useState(""); // 현재 수정 중인 할 일의 id
  const [editText, setEditText] = useState(""); // 수정 중인 텍스트

  // 폼 제출 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 새 할 일 추가
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert("내용을 입력하세요");
      return;
    }
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText(""); // 입력 필드 초기화
  };

  // 할 일 삭제
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 할 일 수정
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId(""); // 수정 모드 종료
  };

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
