import AddTodo from "./components/todo/AddTodo";
import TodoList from "./components/todo/TodoList";
import { TodoProvider } from "./context/TodoContext";

export default function AppTodo() {
  return (
    <TodoProvider>
      <h2>할일 목록</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}
