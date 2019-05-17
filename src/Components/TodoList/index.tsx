import React from 'react';
import TodoItem from '../TodoItem';
import { TodoProps } from '../../helper';

interface TodoListProps {
  todos: TodoProps[];
  onRemoveTodo: (todo: string) => void;
  onChangeStatus: (todo: TodoProps) => void;
}

const TodoList: React.FC<TodoListProps> = ({todos, onRemoveTodo, onChangeStatus}) => {
  return (
    <div className="todo-list">
      {
        todos.map((item: TodoProps, index: number) => <TodoItem key={index} todo={item} index={index} onRemoveTodo={onRemoveTodo} onChangeStatus={onChangeStatus} /> )
      }
    </div>
  );
}

export default TodoList;
