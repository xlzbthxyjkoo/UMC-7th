import React, { useState, useEffect } from "react";
import { useTodo } from "../hooks/useTodo";
import TodoList from "../components/todo/TodoList";
import { useDebounce } from "../hooks/useDebounce";
import * as S from "../styles/TodoStyle";
import { FiSearch } from "react-icons/fi";

const TodoListPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { todos, loading, error, addTodo, updateTodo, deleteTodo, fetchTodos } =
    useTodo();

  // 검색어가 변경될 때마다 Todo 목록을 다시 불러옴
  useEffect(() => {
    const search = async () => {
      try {
        await fetchTodos(debouncedSearchTerm);
      } catch (err) {
        console.error("검색 실패:", err);
      }
    };
    search();
  }, [debouncedSearchTerm, fetchTodos]);

  // Todo 추가 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("제목을 입력해주세요");
      return;
    }

    try {
      const newTodo = {
        title: title.trim(),
        content: content.trim(),
        checked: false,
      };

      await addTodo(newTodo);
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Todo 추가 실패:", err);
    }
  };

  return (
    <S.PageContainer>
      <S.Title>⚡ UMC ToDoList ⚡</S.Title>

      <S.SearchContainer>
        <S.SearchIcon>
          <FiSearch size={20} />
        </S.SearchIcon>
        <S.SearchInput
          placeholder="할 일 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </S.SearchContainer>

      <S.FormContainer onSubmit={handleSubmit}>
        <S.Input
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
        />
        <S.Input
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={loading}
        />
        <S.SubmitButton type="submit" disabled={loading || !title.trim()}>
          추가
        </S.SubmitButton>
      </S.FormContainer>

      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

      {todos.length === 0 && !loading && !error && (
        <div style={{ textAlign: "center", color: "#666" }}>
          할 일이 없습니다.
        </div>
      )}

      <TodoList
        todos={todos}
        onUpdate={updateTodo}
        onDelete={deleteTodo}
        disabled={loading}
      />
    </S.PageContainer>
  );
};

export default TodoListPage;
