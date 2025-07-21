import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import todoReducer from "../reducer/todo-reducer";

export const TodoContext = createContext(null); // todos 상태
export const TodoDispatchContext = createContext(null); // dispatch 함수 상태 관리

export function TodoProvider({ children }) {
  const [todos, dispatch] = useImmerReducer(todoReducer, [
    { id: 0, text: "HTML&CSS 공부하기", done: false },
    { id: 1, text: "JAVASCRIPT 공부하기", done: false },
  ]);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext); // todos 반환
}

export function useTodosDispatch() {
  return useContext(TodoDispatchContext); // dispatch 반환
}
