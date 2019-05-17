import React from 'react';
import './app.scss';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';
import FilterList from '../FilterList';
import { TodoProps, Filter } from '../../helper';

interface Props {

}

interface State {
  todos: TodoProps[];
  filter: Filter;
}

class App extends React.Component<Props, State> {
  public state: State = {
    todos: [],
    filter: Filter.ALL
  }

  public changeFilter = (filter: Filter) => {
    this.setState({filter});
  }

  public removeTodo = (todo: string) => {
    const curTodos = this.state.todos.filter((item: TodoProps) => item.todo !== todo)
    this.setState({todos: curTodos});
  }

  public addTodo = (todo: TodoProps) => {
    const curTodos = this.state.todos.concat(todo)
    this.setState({todos: curTodos});
  }

  public changeStatus = (todo: TodoProps) => {
    const curTodos = this.state.todos.map((item: TodoProps) => {
      if(item.todo === todo.todo) {
        return todo;
      }
      return item;
    });
    this.setState({todos: curTodos});
  }

  render() {
    const filterTodos = this.state.todos.filter((item: TodoProps) => this.state.filter === Filter.ALL || item.status === this.state.filter);
    return (
      <div className="wrapper">
        <h1 className="page-title">Todos</h1>
        <div className="app">
          <header className="app-header">
            <TodoInput handleSubmit={this.addTodo} />
          </header>
          {
            this.state.todos.length !== 0 &&
            <>
              <main className="app-main">
                <TodoList todos={filterTodos} onRemoveTodo={this.removeTodo} onChangeStatus={this.changeStatus} />
              </main>
              <footer className="app-footer">
                <FilterList filter={this.state.filter} onChangeFilter={this.changeFilter}/>
              </footer>
            </>
          }
        </div>
      </div>
    );
  }
}

export default App;
