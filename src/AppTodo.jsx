import { useState } from 'react';
import './App.css';
import TodoList from './components/todo/TodoList.jsx';

export default function AppTodo(props) {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([
    {id: 0, text: 'HTML&CSS 공부하기', done: false},
    {id: 1, text: 'JAVASCRIPT 공부하기', done: false},
  ]);

  const [insertAt, setInsertAt] = useState(todos.length - 1);

  
  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value)
  }
  
  const handleAddTodo = () => {
    const nextId = todos.length; // 임시 키
    // todos.push({ id: nextId, lable: '' });

    setTodos([
      ...todos,
      {id: nextId, text: todoText}
    ])

    setTodoText('');
  }

  const handleAddTodoByIndex = () => {
    const nextId = todos.length;
    const newTodos = [
      // 삽입 지점 이전 항목
      ...todos.slice(0, insertAt),
      {id: nextId, text: todoText, done: false},
      // 사입 지점 이후 항목
      ...todos.slice(insertAt)
    ];
    setTodos(newTodos);
    setTodoText('');
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(e => e.id !== id))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  }

  const handleToggleTodo = (id, done) => {
    // 기존 배열을 변경하는 것이 아니라
    // 새로운 배열을 생성해야함
    const nextTodos = todos.map(item => {
      if (item.id === id) {
        // 객체도 새로운 객체로 생성해야함..
        return {...item, done}; // 전개구문으로 새로운 객체를 생성함
      }
      return item;
    })
    setTodos(nextTodos);
  }

  // !배열 내부의 객체 업데이트하기!
  // 주의) 전개구문으로 생성한 배열은 새로운 배열이지만 배열 안의 객체는 그대로라 전개구문으로 업데이트할 때 기존 배열에 존재하는 객체도 업데이트 됨...
  // const handleToggleCopyTodo = (id, done) => {
  //   const nextTodos = [...copyTodos];  // 새로운 배열
  //   const targetItem = nextTodos.find(item => item.id === id); // 객체는 기존 객체
  //   targetItem.done = done;  // 기존 객체가 업데이트 되는 것임 (새로운 객체가 아님)
  //   setCopyTodos(nextTodos);
  // }

  const handleReverse = () => {
    // reverse()는 기존 배열을 변경함
    // const nextTodos = [...todos];
    // setTodos(nextTodos.reverse());
    
    // toReversed()는 새로운 배열을 리턴함
    setTodos(todos.toReversed())
  }

  return (
    <div>
      <h2>할일 목록</h2>
      <div>
        <input
          type="text"
          value={todoText}
          onChange={handleTodoTextChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={(e) => setInsertAt(e.target.value)}>
          {todos.map((item, index) => (
            <option key={item.id} value={index}>{index} 번째</option>
          ))}
        </select>
        <button onClick={handleAddTodoByIndex}>{insertAt}번째 추가</button>
      </div>

      <div>preview: {todoText}</div>
      <button onClick={handleReverse}>Reverse</button>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
      {/* <TodoList todos={todos} /> */}
      </div>
  );
}
