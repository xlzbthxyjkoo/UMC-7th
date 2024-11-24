const BASE_URL = "http://localhost:3000";

export const todoApi = {
  //목록 조회
  getTodos: async (searchTitle = "") => {
    const queryString = searchTitle ? `?title=${searchTitle}` : "";
    const response = await fetch(`${BASE_URL}/todo${queryString}`);
    if (!response.ok) throw new Error("할 일 목록을 불러오는데 실패했습니다.");
    const [data] = await response.json(); // 배열의 첫 번째 요소가 todos 배열
    return data;
  },

  //상세보기
  getTodoById: async (id) => {
    const response = await fetch(`${BASE_URL}/todo/${id}`);
    if (!response.ok) throw new Error("할 일을 불러오는데 실패했습니다.");
    return response.json();
  },

  //생성
  createTodo: async (todoData) => {
    const response = await fetch(`${BASE_URL}/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: todoData.title,
        content: todoData.content,
      }),
    });
    if (!response.ok) throw new Error("할 일 생성에 실패했습니다.");
    return response.json();
  },

  //수정
  updateTodo: async (id, todoData) => {
    const response = await fetch(`${BASE_URL}/todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData), // 필요한 필드만 전송
    });
    if (!response.ok) throw new Error("할 일 수정에 실패했습니다.");
    return response.text();
  },

  //삭제
  deleteTodo: async (id) => {
    const response = await fetch(`${BASE_URL}/todo/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("할 일 삭제에 실패했습니다.");
    return response.text();
  },
};
