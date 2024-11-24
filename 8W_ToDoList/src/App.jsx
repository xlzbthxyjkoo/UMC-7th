import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoListPage from "./pages/ToDoListPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/todo/:id" element={<TodoDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
