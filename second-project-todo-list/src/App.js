import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");

  const inputTodo = (e) => {
    setTodo(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={submitTodo}>
        <input
          type="text"
          placeholder="Write your todo"
          value={todo}
          onChange={inputTodo}
        />
        <button>Add todo</button>
      </form>
    </div>
  );
}

export default App;
