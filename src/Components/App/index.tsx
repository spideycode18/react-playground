import React from 'react';
import './app.scss';
import TodoInput from '../TodoInput';
import TodoList from '../../containers/TodoListContainer';
import FilterList from '../../containers/FilterListContainer';
import { TodoProps } from '../../types';

interface Props {
  addTodo: (todo: TodoProps) => void;
  quantity: number;
}

const App: React.FC<Props> = ({addTodo, quantity}) => {
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
              <TodoList />
            </main>
            <footer className="app-footer">
              <FilterList />
            </footer>
          </>
        }
      </div>
    </div>
  );
}

export default App;
