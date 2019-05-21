import { createSelector } from 'reselect';
import { Filter, TodoProps } from '../helper';
import { AppState } from '../containers/App';
export const getVisibleTodos = createSelector(
  [ (state: AppState) => state.todos, (state: AppState) => state.filter ],
  (todos: TodoProps[], filter: Filter) => todos.filter((item: TodoProps) => filter === Filter.ALL || item.status === filter)
)