import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  const inputTodo = (e) => {
    setTodo(e.target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodoArr((currentTodoArr) => [todo, ...currentTodoArr]);
  };

  return (
    <div>
      <h1>My Todos ({todoArr.length})</h1>
      <form onSubmit={submitTodo}>
        <input
          type="text"
          placeholder="Write your todo"
          value={todo}
          onChange={inputTodo}
        />
        <button>Add todo</button>
      </form>
      <hr />
      <ul>
        {todoArr.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
