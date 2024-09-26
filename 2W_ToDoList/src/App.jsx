import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "예지" },
  ]);
  //랜더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={}/>
        <button type="submit">할 일 등록</button>
      </form>
      <div>
        {todos.map((todo) => {
          <h4 key={todo.id}>
            {todo.id}.{todo.task}
          </h4>;
        })}
      </div>
    </>
  );
}

export default App;
