import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles/ListStyle";

const TodoList = ({ todos, onUpdate, onDelete, disabled }) => {
  const navigate = useNavigate();
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  if (!todos?.length) {
    return null;
  }

  const handleCheckboxClick = (e, todo) => {
    e.stopPropagation(); // 상세보기로 가는 것을 방지
    onUpdate(todo.id, { ...todo, checked: !todo.checked });
  };

  const handleEdit = (e, todo) => {
    e.stopPropagation();
    setEditingId(todo.id);
    setEditTitle(todo.title);
    setEditContent(todo.content);
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    onDelete(id);
  };

  const handleUpdate = async (e, id) => {
    e.stopPropagation();
    await onUpdate(id, {
      title: editTitle,
      content: editContent,
    });
    setEditingId(null);
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setEditingId(null);
    setEditTitle("");
    setEditContent("");
  };
  const handleTodoClick = (id) => {
    if (!editingId) {
      navigate(`/todo/${id}`);
    }
  };

  return (
    <div>
      {todos.map((todo) => (
        <S.TodoItemContainer
          key={todo.id}
          onClick={() => handleTodoClick(todo.id)}
          style={{ cursor: editingId ? "default" : "pointer" }}
        >
          <S.CheckboxContainer onClick={(e) => e.stopPropagation()}>
            <S.Checkbox
              checked={todo.checked}
              onChange={(e) => handleCheckboxClick(e, todo)}
              disabled={disabled}
            />
          </S.CheckboxContainer>

          {editingId === todo.id ? (
            // 수정 모드
            <S.TodoContent onClick={(e) => e.stopPropagation()}>
              <S.EditInput
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="제목을 입력하세요"
                disabled={disabled}
              />
              <S.EditInput
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                placeholder="내용을 입력하세요"
                disabled={disabled}
              />
              <S.ButtonGroup>
                <S.Button
                  onClick={(e) => handleUpdate(e, todo.id)}
                  disabled={disabled || !editTitle.trim()}
                >
                  저장
                </S.Button>
                <S.Button
                  variant="delete"
                  onClick={handleCancel}
                  disabled={disabled}
                >
                  취소
                </S.Button>
              </S.ButtonGroup>
            </S.TodoContent>
          ) : (
            // 보기 모드
            <>
              <S.TodoContent>
                <S.TodoTitle checked={todo.checked}>{todo.title}</S.TodoTitle>
                {todo.content && <S.TodoSubtext>{todo.content}</S.TodoSubtext>}
              </S.TodoContent>

              <S.ButtonGroup onClick={(e) => e.stopPropagation()}>
                <S.Button
                  onClick={(e) => handleEdit(e, todo)}
                  disabled={disabled}
                >
                  수정
                </S.Button>
                <S.Button
                  variant="delete"
                  onClick={(e) => handleDelete(e, todo.id)}
                  disabled={disabled}
                >
                  삭제
                </S.Button>
              </S.ButtonGroup>
            </>
          )}
        </S.TodoItemContainer>
      ))}
    </div>
  );
};

export default TodoList;
