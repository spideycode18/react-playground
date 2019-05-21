import { connect } from 'react-redux';
import { addTodo, removeTodo, setStatus, setFilter } from '../actions';
import App from '../components/App';
import { Filter, TodoProps } from '../helper';
import { getVisibleTodos } from '../selectors';

export interface AppState {
  todos: TodoProps[];
  filter: Filter;
}

const mapStateToProps = (state: AppState) => ({
  todos: getVisibleTodos(state),
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