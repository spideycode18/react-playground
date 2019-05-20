import React from 'react';
import './item.scss';
import { TodoProps, Filter } from '../../helper';

interface TodoItemProps {
  index: number;
  todo: TodoProps;
  onRemoveTodo: (todo: TodoProps) => void;
  onChangeStatus: (todo: TodoProps) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({index, todo, onRemoveTodo, onChangeStatus}) => {
  const handleRemoveTodo = () => {
    onRemoveTodo(todo);
  }

  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      onChangeStatus({...todo, status: Filter.DONE});
    } else {
      onChangeStatus({...todo, status: Filter.ONGOING});
    }
  }

  return (
    <div className="item">
      <input className="item__checkbox" type="checkbox" id={`filter-${index}`} checked={todo.status === Filter.DONE} onChange={handleChangeStatus}/>
      <div className="item__checkmark"></div>
      <label htmlFor={`filter-${index}`} className="item__text">{todo.todo}</label>
      <button onClick={handleRemoveTodo} className="item__delete">×</button>
    </div>
  );
}

export default TodoItem;
