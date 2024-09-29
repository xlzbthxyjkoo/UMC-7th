import React from "react";
import Button from "./Button";
import Input from "./Input";

// TodoItem 컴포넌트: 개별 할 일 항목을 표시하는 컴포넌트
// props:
// - todo: 할 일 객체 (id와 task 포함)
// - onDelete: 삭제 기능 핸들러
// - onEdit: 수정 모드 전환 핸들러
// - onUpdate: 수정 완료 핸들러
// - editingId: 현재 수정 중인 항목의 id
// - editText: 수정 중인 텍스트
// - setEditText: 수정 중인 텍스트 업데이트 함수
const TodoItem = ({
  todo,
  onDelete,
  onEdit,
  onUpdate,
  editingId,
  editText,
  setEditText,
}) => (
  <div className="todo-item">
    {editingId !== todo.id ? (
      // 일반 모드: 할 일 내용 표시
      <div className="todo-info">
        <p className="todo-id">{todo.id}번</p>
        <p className="todo-task">{todo.task}</p>
      </div>
    ) : (
      // 수정 모드: 입력 필드 표시
      <div className="todo-edit">
        <p className="todo-id">{todo.id}번</p>
        <Input
          className="edit-input"
          defaultValue={todo.task}
          onChange={(e) => setEditText(e.target.value)}
        />
      </div>
    )}
    <Button className="delete-btn" onClick={() => onDelete(todo.id)}>
      삭제
    </Button>
    {editingId === todo.id ? (
      <Button
        className="complete-btn"
        onClick={() => onUpdate(editingId, editText)}
      >
        완료
      </Button>
    ) : (
      <Button className="edit-btn" onClick={() => onEdit(todo.id)}>
        수정
      </Button>
    )}
  </div>
);

export default TodoItem;
