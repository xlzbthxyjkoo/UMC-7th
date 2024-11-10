import { createContext, useState } from "react";

//데이터를 담고 있음
export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
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
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
