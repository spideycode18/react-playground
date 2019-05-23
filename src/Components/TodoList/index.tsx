import React from 'react';
import TodoItem from '../TodoItem';
import { TodoProps } from '../../types';

interface TodoListProps {
  todos: TodoProps[];
  removeTodo: (todo: TodoProps) => void;
  setStatus: (todo: TodoProps) => void;
}

const TodoList: React.FC<TodoListProps> = ({todos, removeTodo, setStatus}) => {
  return (
    <div className="todo-list">
      {
        todos.map((item: TodoProps, index: number) => <TodoItem key={index} todo={item} index={index} onRemoveTodo={removeTodo} onChangeStatus={setStatus} /> )
      }
    </div>
  );
}

export default TodoList;
