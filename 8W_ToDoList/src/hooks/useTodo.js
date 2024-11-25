import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { todoApi } from "../apis/todoApi";

export const useTodo = (searchTitle = "") => {
  const queryClient = useQueryClient();

  const {
    data: todos = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["todos", searchTitle],
    queryFn: () => todoApi.getTodos(searchTitle),
  });

  // Mutations
  const addTodoMutation = useMutation({
    mutationFn: todoApi.createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: ({ id, todoData }) => todoApi.updateTodo(id, todoData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: todoApi.deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const addTodo = async (todoData) => {
    await addTodoMutation.mutateAsync(todoData);
  };

  const updateTodo = async (id, todoData) => {
    await updateTodoMutation.mutateAsync({ id, todoData });
  };

  const deleteTodo = async (id) => {
    await deleteTodoMutation.mutateAsync(id);
  };

  return {
    todos,
    loading,
    error: error?.message,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
