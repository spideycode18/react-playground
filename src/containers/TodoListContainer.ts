import { connect } from 'react-redux';
import { removeTodo, setStatus } from '../actions';
import TodoList from '../components/TodoList';
import { AppState } from '../types';
import { getVisibleTodos } from '../selectors';

const mapStateToProps = (state: AppState) => ({
  todos: getVisibleTodos(state)
});

const mapDispatchToProps = {
  removeTodo,
  setStatus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);