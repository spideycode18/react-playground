import React from 'react';
import './app.scss';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';
import FilterList from '../FilterList';
import { TodoProps, Filter } from '../../helper';

interface Props {
  todos: TodoProps[];
  filter: Filter;
  addTodo: (todo: TodoProps) => void;
  removeTodo: (todo: TodoProps) => void;
  setStatus: (todo: TodoProps) => void;
  setFilter: (filter: Filter) => void;
  quantity: number;
}

const App: React.FC<Props> = ({todos, filter, addTodo, removeTodo, setStatus, setFilter, quantity}) => {
  return (
    <div className="wrapper">
      <h1 className="page-title">Todos</h1>
      <div className="app">
        <header className="app-header">
          <TodoInput handleSubmit={addTodo} />
        </header>
        {
          quantity !== 0 &&
          <>
            <main className="app-main">
              <TodoList todos={todos} onRemoveTodo={removeTodo} onChangeStatus={setStatus} />
            </main>
            <footer className="app-footer">
              <FilterList filter={filter} onChangeFilter={setFilter}/>
            </footer>
          </>
        }
      </div>
    </div>
  );
}

export default App;
