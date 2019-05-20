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

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (todo: TodoProps) => dispatch(addTodo(todo)),
  removeTodo: (todo: TodoProps) => dispatch(removeTodo(todo)),
  setStatus: (todo: TodoProps) => dispatch(setStatus(todo)),
  setFilter: (filter: Filter) => dispatch(setFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);