export default function todoReducer(todos, action) {
  // type
  switch (action.type) {
    case "added": {
      const { nextId, todoText } = action;
      return [...todos, { id: nextId, text: todoText }];
    }
    case "added_index": {
      const { insertAt, nextId, todoText } = action;
      return [
        ...todos.slice(0, insertAt),
        { id: nextId, text: todoText, done: false },
        ...todos.slice(insertAt),
      ];
    }
    case "deleted": {
      const { deleteId } = action;
      return todos.filter((e) => e.id !== deleteId);
    }
    case "done": {
      const { id, done } = action;
      return todos.map((item) => {
        if (item.id === id) {
          // 객체도 새로운 객체로 생성해야함..
          return { ...item, done }; // 전개구문으로 새로운 객체를 생성함
        }
        return item;
      });
    }
    case "reverse": {
      return todos.toReversed();
    }
    default: {
      throw Error("알수없는 액션 타입: " + action.type);
    }
  }
}
