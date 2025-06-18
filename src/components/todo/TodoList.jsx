export default function TodoList({ todos = [], onDeleteTodo, onToggleTodo }) {
  const items = [...todos]; // deep copy
  
  // items.push({id:2, label: '포트폴리오 사이트 만들기'});

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={(e) => onToggleTodo(item.id, e.target.checked)}
          />
          <span>{item.done ? (<del>{item.text}</del>) : item.text}</span>
        <button onClick={() => onDeleteTodo(item.id)}>X</button>
        </li> 
      ))}
    </ul>
  );
}
