import { useState } from "react";
import "./App.css";

function App() {
  // 랜더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "예지" },
  ]);

  const [text, setText] = useState("");

  const [editingId, setEditingId] = useState("");

  const [editText, setEditText] = useState("");

  // 추가하기
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert("내용을 입력하세요");
      return;
    }
    setTodos((prev) => [
      ...prev, //값 복사
      { id: Math.floor(Math.random() * 100) + 2, task: text }, // "tak"을 "task"로 수정
    ]);
    setText("");
  };

  //삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  //수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo} type="submit">
          할 일 등록
        </button>
      </form>
      <div>
        {todos.map((todo) => (
          <div style={{ display: "flex", gap: "20px" }}>
            {editingId !== todo.id && (
              <div key={todo.id} style={{ display: "flex", gap: "5px" }}>
                <p>{todo.id}번</p>
                <p>{todo.task}</p>
              </div>
            )}
            {editingId === todo.id && (
              <div key={todo.id} style={{ display: "flex", gap: "5px" }}>
                <p>{todo.id}번</p>
                <input
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
            {editingId === todo.id ? (
              <button onClick={() => updateTodo(editingId, editText)}>
                완료
              </button>
            ) : (
              <button onClick={() => setEditingId(todo.id)}>수정</button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
