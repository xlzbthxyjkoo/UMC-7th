import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "../styles/DetailStyle";
import { todoApi } from "../apis/todoApi";

const TodoDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(null);

  useEffect(() => {
    const fetchTodoDetail = async () => {
      try {
        setLoading(true);
        const data = await todoApi.getTodoById(id);
        setTodo(data);
        setEditedTodo(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodoDetail();
  }, [id]);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      await todoApi.updateTodo(id, editedTodo);
      setTodo(editedTodo);
      setIsEditing(false);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await todoApi.deleteTodo(id);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!todo) return <div>Todo not found</div>;

  return (
    <S.DetailContainer>
      <S.Title>할 일 상세</S.Title>

      {isEditing ? (
        <S.DetailContent>
          <S.Label>제목</S.Label>
          <S.ContentInput
            as="input"
            value={editedTodo.title}
            onChange={(e) =>
              setEditedTodo({ ...editedTodo, title: e.target.value })
            }
            placeholder="제목을 입력하세요"
          />

          <S.Label>내용</S.Label>
          <S.ContentInput
            value={editedTodo.content}
            onChange={(e) =>
              setEditedTodo({ ...editedTodo, content: e.target.value })
            }
            placeholder="내용을 입력하세요"
          />

          <S.CheckboxContainer>
            <input
              type="checkbox"
              id="todoCheck"
              checked={editedTodo.checked}
              onChange={(e) =>
                setEditedTodo({ ...editedTodo, checked: e.target.checked })
              }
            />
            <label htmlFor="todoCheck">완료</label>
          </S.CheckboxContainer>

          <S.ButtonContainer>
            <S.StyledButton onClick={handleUpdate} disabled={loading}>
              저장
            </S.StyledButton>
            <S.StyledButton
              variant="delete"
              onClick={() => setIsEditing(false)}
              disabled={loading}
            >
              취소
            </S.StyledButton>
          </S.ButtonContainer>
        </S.DetailContent>
      ) : (
        <S.DetailContent>
          <S.Label>제목</S.Label>
          <S.ContentText>{todo.title}</S.ContentText>

          <S.Label>내용</S.Label>
          <S.ContentText>{todo.content}</S.ContentText>

          <S.CheckboxContainer>
            <input
              type="checkbox"
              id="todoCheckReadOnly"
              checked={todo.checked}
              readOnly
            />
            <label htmlFor="todoCheckReadOnly">완료</label>
          </S.CheckboxContainer>

          <S.ButtonContainer>
            <S.StyledButton
              variant="edit"
              onClick={() => setIsEditing(true)}
              disabled={loading}
            >
              수정
            </S.StyledButton>
            <S.StyledButton
              variant="delete"
              onClick={handleDelete}
              disabled={loading}
            >
              삭제
            </S.StyledButton>
            <S.StyledButton onClick={() => navigate("/")}>
              목록으로
            </S.StyledButton>
          </S.ButtonContainer>
        </S.DetailContent>
      )}
    </S.DetailContainer>
  );
};

export default TodoDetailPage;
