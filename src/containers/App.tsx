import { connect } from 'react-redux';
import { addTodo, removeTodo, setStatus, setFilter } from '../actions';
import App from '../components/App';
import { Filter, TodoProps } from '../helper';

const getFilteredTodos = (todos: TodoProps[], filter: Filter) => {
  return todos.filter((item: TodoProps) => filter === Filter.ALL || item.status === filter)
}

const mapStateToProps = (state: any) => ({
  todos: getFilteredTodos(state.todos, state.filter),
  filter: state.filter,
  quantity: state.todos.length
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
  setStatus,
  setFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);