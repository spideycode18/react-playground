import { connect } from 'react-redux';
import { addTodo } from '../actions';
import App from '../components/App';
import { AppState } from '../types';

const mapStateToProps = (state: AppState) => ({
  quantity: state.todos.length
});

const mapDispatchToProps = {
  addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);