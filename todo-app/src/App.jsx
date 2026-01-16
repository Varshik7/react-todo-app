import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="app">
      <Header />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTodo}>Add</button>

      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
