import { useState, useEffect, useCallback } from "react";
import { todoApi } from "../apis/todoApi";

export const useTodo = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //목록 조회
  const fetchTodos = useCallback(async (searchTitle = "") => {
    setLoading(true);
    try {
      const data = await todoApi.getTodos(searchTitle);
      setTodos(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setTodos([]);
    } finally {
      setLoading(false);
    }
  }, []);

  //추가
  const addTodo = async (todoData) => {
    setLoading(true);
    try {
      await todoApi.createTodo(todoData);
      await fetchTodos(); // 목록 새로고침
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //수정
  const updateTodo = async (id, todoData) => {
    setLoading(true);
    try {
      await todoApi.updateTodo(id, todoData);
      await fetchTodos();
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //삭제
  const deleteTodo = async (id) => {
    setLoading(true);
    try {
      await todoApi.deleteTodo(id);
      await fetchTodos();
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //데이터 로드
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return {
    todos,
    loading,
    error,
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
