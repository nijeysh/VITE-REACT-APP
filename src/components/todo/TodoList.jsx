import TodoItem from './TodoItem';
import { useTodos } from '../../context/TodoContext';
import { useMemo, useState } from 'react';

export default function TodoList() {
  const todos = useTodos();

  const [isDone, setIsDone] = useState(false);
  const getFilteredTodos = () => {
    if (!isDone) {
      return todos;
    }

    return todos.filter((todo) => todo.done);
  };

  const filteredTodos = getFilteredTodos();

  const getStatsCount = () => {
    console.log('getStatsCount 함수 실행');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.done).length;
    return {
      totalCount,
      doneCount,
    };
  };

  // useMemo(메모이제이션)에 두 가지 전달 => 1. 계산함수, 2. 종속성 목록
  const { totalCount, doneCount } = useMemo(() => getStatsCount(), [todos]);

  return (
    <>
      <div>
        <input
          id="isDone"
          type="checkbox"
          checked={isDone}
          onChange={(e) => setIsDone(e.target.checked)}
        />
        <label htmlFor="isDone">
          완료된 항목 보기({doneCount}/{totalCount})
        </label>
      </div>
      <ul>
        {/* {todos.map((item) => ( */}
        {filteredTodos.map((item) => (
          <li key={item.id}>
            <TodoItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
